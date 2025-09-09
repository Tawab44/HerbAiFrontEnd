import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <>
      <section id="features" className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title="Main Features"
            paragraph="Herb AI comes packed with powerful features to make plant identification 
            effortless and informative. Our model can accurately identify over 100 common herbs 
            from just an image, providing you with the herb’s name, its medicinal and culinary 
            benefits, and practical tips on how to use it. Whether you’re exploring herbal remedies,
             cooking, or learning about plants, Herb AI gives you instant, reliable information in a
              simple, user-friendly interface."
            center
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
