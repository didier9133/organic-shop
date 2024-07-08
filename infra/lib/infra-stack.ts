import { App, GitHubSourceCodeProvider } from "@aws-cdk/aws-amplify-alpha";
import { SecretValue, Stack, StackProps } from "aws-cdk-lib";
import { Construct } from "constructs";

export class InfraStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const amplifyApp = new App(this, "amplify-app", {
      appName: "Nextjs hosting example",
      sourceCodeProvider: new GitHubSourceCodeProvider({
        owner: "aws-samples",
        repository: "amplify-nextjs",
        oauthToken: SecretValue.secretsManager(""),
      }),
    });
  }
}
