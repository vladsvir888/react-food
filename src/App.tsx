"use client";

import BaseLayout from "./layouts/Base";

type Props = {
  children: React.ReactNode;
};

const App = ({ children }: Props) => {
  return <BaseLayout>{children}</BaseLayout>;
};

export default App;
