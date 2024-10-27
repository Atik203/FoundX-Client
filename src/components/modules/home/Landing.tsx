import { Input } from "@nextui-org/input";
import { SearchIcon } from "../../icons";

const Landing = () => {
  return (
    <div className="h-[calc(100vh-64px)] bg-[url('/glass.jpg')] bg-cover bg-center">
      <div className="py-16 px-2 mx-auto max-w-xl text-center">
        <form action="">
          <Input
            placeholder="Search"
            classNames={{
              inputWrapper: " mx-auto bg-default",
            }}
            size="lg"
            startContent={<SearchIcon className="w-6 h-6 text-gray-500" />}
            type="text"
          />
        </form>
      </div>
    </div>
  );
};

export default Landing;
