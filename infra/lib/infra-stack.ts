import {
  App,
  GitHubSourceCodeProvider,
  Platform,
  RedirectStatus,
} from "@aws-cdk/aws-amplify-alpha";
import { SecretValue, Stack, StackProps } from "aws-cdk-lib";
import { Construct } from "constructs";
import { BuildSpec } from "aws-cdk-lib/aws-codebuild";

export class InfraStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const amplifyApp = new App(this, "amplify-app", {
      appName: "Nextjs hosting example",
      sourceCodeProvider: new GitHubSourceCodeProvider({
        owner: "didier9133",
        repository: "organic-shop",
        oauthToken: SecretValue.secretsManager("github-token-cdk"),
      }),
      autoBranchDeletion: true,
      platform: Platform.WEB_COMPUTE,
      customRules: [
        {
          source: "/<*>",
          target: "/index.html",
          status: RedirectStatus.NOT_FOUND_REWRITE,
        },
      ],
      buildSpec: BuildSpec.fromObject({
        version: "1.0",
        frontend: {
          phases: {
            preBuild: {
              commands: ["npm ci"],
            },
            build: {
              commands: ["npm run build"],
            },
          },
          artifacts: {
            baseDirectory: ".next",
            files: ["**/*"],
          },
          cache: {
            paths: ["node_modules/**/*"],
          },
        },
      }),
    });

    amplifyApp.addBranch("main", {
      stage: "PRODUCTION",
    });

    amplifyApp.addEnvironment("NEXT_PUBLIC_API_URL", "https://api.example.com");
    amplifyApp.addEnvironment(
      "PRIVATE_SECRET_KEY",
      SecretValue.secretsManager("private-secret-key").toString(),
    );
  }
}
