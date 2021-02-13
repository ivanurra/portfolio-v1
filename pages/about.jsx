import Link from "next/link";
import Navbar from "../components/Navbar";
import Head from "next/head";

function About() {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>

      <Navbar />

      <section className="hero">
        <div className="container">
          <div className="text-wrapper w-full">
            <h1 className="title">About</h1>
            <p className="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              maximus eu quam et consectetur. Morbi vel dictum arcu. Etiam
              tristique semper eros, non feugiat est accumsan vitae. Nulla eget
              ullamcorper leo, et volutpat augue. Cras quis enim ut metus porta
              faucibus ut at quam. Ut non fringilla diam, ut lacinia enim.
              Aenean a rhoncus elit, sed dapibus libero. Donec eu vulputate
              lacus. Maecenas lectus dolor, laoreet quis fringilla sed, lobortis
              a nibh. Phasellus nisi nibh, vestibulum vel porttitor sed, euismod
              vitae tellus. Vestibulum ante ipsum primis in faucibus orci luctus
              et ultrices posuere cubilia curae; Mauris congue nisi sit amet
              lacinia porta. Pellentesque scelerisque metus sodales orci
              volutpat, vitae imperdiet nisi egestas. Etiam rhoncus ipsum id
              varius porttitor. Vivamus rhoncus ultrices ex, at semper leo
              sodales ac. Class aptent taciti sociosqu ad litora torquent per
              conubia nostra, per inceptos himenaeos. Ut tristique justo velit,
              in aliquet turpis egestas non. Donec eget dolor non nisi ultrices
              vestibulum. Interdum et malesuada fames ac ante ipsum primis in
              faucibus. Donec blandit lorem in tortor ultrices tincidunt.
              Vestibulum mauris enim, tempor sit amet tincidunt et, varius eu
              dui. Vestibulum ante ipsum primis in faucibus orci luctus et
              ultrices posuere cubilia curae; Nulla sollicitudin, metus vitae
              malesuada rutrum, dolor nisi scelerisque risus, pharetra cursus
              ipsum risus eu elit. Pellentesque lacus velit, sagittis non elit
              at, cursus faucibus massa. Integer gravida est odio, nec egestas
              turpis pharetra nec. Suspendisse imperdiet tincidunt ipsum.
              Integer gravida eu est sit amet condimentum. In sit amet purus at
              lectus fringilla molestie id sit amet sapien. Mauris porta sodales
              tellus, nec posuere nulla faucibus at. Sed lorem dui, venenatis
              non sagittis eu, sagittis nec neque. Integer vel efficitur magna,
              at imperdiet orci. Aliquam lectus eros, tincidunt quis tellus nec,
              tincidunt varius massa. Cras posuere lacinia sem sit amet
              placerat. Ut tristique, metus eget bibendum ullamcorper, ipsum
              quam luctus sapien, non cursus odio est at nunc. Proin consequat
              ullamcorper sodales. Donec aliquet, risus accumsan varius
              interdum, massa diam molestie libero, a scelerisque nisl lectus
              quis purus. Nunc interdum orci mi. Nam varius, est nec finibus
              gravida, justo mi varius urna, nec semper magna arcu sit amet
              diam. Maecenas sit amet elit et tortor dictum eleifend. Mauris in
              efficitur arcu, ut sodales tellus. Quisque consequat venenatis
              diam vitae varius.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
