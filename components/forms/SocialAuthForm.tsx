import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

const SocialAuthForm = () => {
  const ButtonClass =
    "background-dark400_light900 body-medium text-dark200_light800 rounded-2 min-h-12 flex-1 px-4 py-3.5";
  return (
    <div className="mt-10 flex flex-wrap gap-2">
      <Button className={ButtonClass}>
        <Image
          src="/icons/github.svg"
          alt="Github icon"
          width={20}
          height={20}
          className="invert-colors mr-2.5 object-contain"
        />
        <span>Login with Github</span>
      </Button>

      <Button className={ButtonClass}>
        <Image
          src="/icons/google.svg"
          alt="Google icon"
          width={20}
          height={20}
          className="mr-2.5 object-contain"
        />
        <span>Login with Google</span>
      </Button>
    </div>
  );
};

export default SocialAuthForm;
