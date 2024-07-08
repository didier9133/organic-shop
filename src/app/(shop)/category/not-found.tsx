import Image from "next/image";
import Link from "next/link";
import styles from "./style.module.css";

export default function () {
  return (
    <div className="flex flex-col justify-evenly items-center bg-background-404 md:flex-row">
      <div className="text-center pt-6 relative z-10 max-w-80">
        <h2 className="antialiased text-4xl md:text-7xl  mb-3">
          Whoops! lo sentimos.
        </h2>
        <p className="font-light">La página que buscas no existe.</p>
        <Link className="font-normal transition-all hover:underline" href={"/"}>
          Regresar
        </Link>
      </div>

      <div
        className={`${styles.container} relative w-full max-w-md md:max-w-lg`}>
        <Image
          className="object-contain object-center"
          src="/imgs/IMG_0516.JPG"
          fill
          alt="404-not-found"
        />
      </div>
    </div>
  );
}
