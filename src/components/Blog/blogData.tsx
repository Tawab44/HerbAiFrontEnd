import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "Ocimum Tenuiflorum (Tulsi)",
    paragraph:
      "Tulsi, also known as Holy Basil, is revered for its medicinal properties. It helps boost immunity, reduces stress, supports respiratory health, and has anti-inflammatory and antioxidant benefits.Commonly used in teas, herbal remedies,Tulsi is a natural way to promote overall wellness and vitality.",

    image: "/images/blog/TulsiBlog.png",
    author: {
      name: "Samuyl Joshi",
      image: "/images/blog/author-03.png",
      designation: "Researcher",
    },
    tags: ["Tulsi"],
    publishDate: "2025",
  },
  {
    id: 2,
    title: "Mentha (Mint)",
    paragraph:
      "Mint is a refreshing herb known for its digestive and cooling properties. It helps relieve headaches, improves digestion, and adds flavor to foods and drinks. Widely used in teas, culinary dishes, and natural remedies, mint is a versatile herb that promotes wellness and a fresh, invigorating experience.",
    image: "/images/blog/mintblog.jpg",
    author: {
      name: "Musharof Chy",
      image: "/images/blog/author-02.png",
      designation: "Content Writer",
    },
    tags: ["Mint"],
    publishDate: "2025",
  },
  {
    id: 3,
    title: "Withania somnifera(Ashwa)",
    paragraph:
      "Ashwagandha is a powerful adaptogenic herb that helps reduce stress, improve energy levels, and support better sleep. It is widely used in traditional medicine to enhance immunity, boost mental clarity, and promote overall wellness.It is a natural choice for anyone looking to maintain vitality in daily life.",
    image: "/images/blog/aswagandhablog.jpg",
    author: {
      name: "Lethium Deo",
      image: "/images/blog/author-03.png",
      designation: "User",
    },
    tags: ["Ashwagandha"],
    publishDate: "2025",
  },
];
export default blogData;
