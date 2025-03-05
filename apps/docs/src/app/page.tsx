"use client";

import { Milkdown, MilkdownProvider, useEditor } from "@milkdown/react";
import { Crepe } from "@milkdown/crepe";
import "@milkdown/crepe/theme/common/style.css";
import "@milkdown/crepe/theme/frame.css";
import "./tailwind.css";
const markdown = `
  # Title Section
  ## sub header
  ### sub sub header
  Content . . .
`;

export const MilkdownEditor: React.FC = () => {
  useEditor((root) => {
    const crepe = new Crepe({
      root,
      defaultValue: markdown,
    });
    return crepe;
  }, []);

  // @ts-ignore
  return <Milkdown />;
};

export default function ArticleEditor() {
  return (
    <div className="mt-16 sm:mt-32">
      <div className="bg-white/95 text-blue-400">
        hello
        {/* @ts-ignore */}
        <MilkdownProvider>
          <MilkdownEditor />
        </MilkdownProvider>
      </div>
    </div>
  );
}
