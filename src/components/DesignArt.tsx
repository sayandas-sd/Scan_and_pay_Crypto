import image1 from "../assets/design.jpg";
import image2 from "../assets/grafiti.jpg"

interface Type {
  src: string;
}

const desktopImage: Type[] = 
[
    { src: image1 },
    { src: image2 }
];

export const DesignArt = ({type}: {type: "signup" | "signin"}) => {
  const selectedImges = (type === "signin" ? desktopImage[0].src : desktopImage[1].src);

  return (
    <div className="bg-red-100 h-screen flex justify-center flex-col">
      <div className="w-full h-full min-h-full">
         <img src={selectedImges} alt="Design" className="w-full h-full object-cover" />
      </div>
    </div>
  );
};
