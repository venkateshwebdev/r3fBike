import { useContext } from "react";
import { TextContext } from "./context";
import { motion } from "framer-motion";
const Home = () => {
  const { title } = useContext(TextContext);
  return (
    <main className={`absolute min-h-[100vh] w-full bg-gray-200 top-0 p-16 overflow-hidden flex flex-col items-center justify-center ${title==="scene"&&"bg-[#555555]"}`}>
      {title === "title" && (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 500, duration: 1, delay: 2 }}
          className="text-3xl flex flex-col gap-10"
        >
          <h1 className="font-extrabold text-6xl">CORTEX</h1>
          <h1
            className="text-[210px] pt-[50px] text-transparent font-bold"
            style={{ WebkitTextStroke: "2px black" }}
          >
            BICYCLES
          </h1>
        </motion.div>
      )}
      {title === "animation" && (
        <motion.div
          className="absolute bottom-5 pl-16"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1, transition: { type: "tween" } }}
        >
          <h1 className="text-5xl title">
            Crafting Cycling Perfection: Where Engineering Meets Adventure"
          </h1>
          <p className="w-1/2 max-md:w-full text-lg">
            we believe that every cycling adventure begins with the foundation
            of exceptional build quality. Our bicycles are not just machines;
            they are a testament to the art of craftsmanship, meticulously
            designed.
          </p>
        </motion.div>
      )}
      {title === "tyres" && (
        <motion.div
          className="absolute right-0 w-1/3 p-16 text-right"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1, transition: { type: "tween" } }}
        >
          <h1 className="text-5xl font-bold title">
            Power and Precision Unleashed: Optimal Gearcase and Superior
            Traction Tires Redefine Your Ride.{" "}
          </h1>
          <p className="text-lg">
            Discover the perfect harmony of power and precision with our
            meticulously engineered gearcase and superior traction tires. Our
            gearcases ensure seamless shifting, empowering you to conquer any
            terrain with ease, while our tires redefine grip and endurance,
            providing you with the confidence to tackle rugged trails and urban
            landscapes alike.
          </p>
        </motion.div>
      )}
      {title === "style" && (
        <motion.div className="absolute flex items-center justify-between w-full">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: { type: "keyframes", delay: 0.5 },
            }}
            className="text-left w-1/3 p-16"
          >
            <h1 className="text-5xl font-bold title">
              "Sleek Sophistication on Wheels: The Art of Style Redefined"
            </h1>
            <p className="text-lg">
              Indulge in the epitome of sleek sophistication with our
              meticulously designed bicycles. From the elegantly curved frames
              to the seamlessly integrated components, every detail embodies a
              timeless blend of style and functionality. Whether you're cruising
              through the city streets or embarking on an off-road adventure
            </p>
          </motion.div>
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: { type: "keyframes", delay: 0.5 },
            }}
            className="text-right w-1/3  p-16"
          >
            <h1 className="text-5xl font-bold title">
              "Beyond Aesthetics: Where Form and Function Merge in Perfect
              Harmony".
            </h1>
            <p className="text-lg">
              Embrace a bicycle that goes beyond aesthetics, where every curve
              and contour serves a purpose, seamlessly merging form and function
              in perfect harmony. Our bicycles aren't just about looks; they are
              a testament to the meticulous engineering that enhances your
              riding experience.
            </p>
          </motion.div>
        </motion.div>
      )}
      {title === "features" && (
        <motion.div
          className="absolute left-0 w-1/2 p-16 text-left"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{
            x: 0,
            opacity: 1,
            transition: { type: "spring", stiffness: 500},
          }}
        >
          <h1 className="text-5xl font-bold title">
            Unleashing the Cycling Revolution: Key Features Redefining the
            Riding Experience.
          </h1>
          <div className="text-lg">
            <p>
              Lightweight yet robust carbon fiber frames for
              agile handling and durability
            </p>
            <p>
              Advanced precision gear shifting for seamless
              transitions on any terrain.
            </p>
            <p>
              Enhanced shock absorption technology for a
              smooth and comfortable ride
            </p>
          </div>
        </motion.div>
      )}
    </main>
  );
};

export default Home;
