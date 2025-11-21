import React from "react";

interface GreetingProps {
  name: string;
}

const Greeting: React.FC<GreetingProps> = ({ name }) => {
    return <h3>Hello, {name}!</h3>;
};

export default Greeting;