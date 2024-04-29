"use client";

import { Remirror, ThemeProvider, Toolbar, useRemirror } from "@remirror/react";

import {
  BoldExtension,
  BulletListExtension,
  CodeBlockExtension,
  HeadingExtension,
  ImageExtension,
  ItalicExtension,
  LinkExtension,
  NodeFormattingExtension,
  OrderedListExtension,
  StrikeExtension,
  UnderlineExtension,
} from "remirror/extensions";
import ToolbarButtons from "../button/toolbar";

import { forwardRef, useImperativeHandle } from "react";
import { htmlToProsemirrorNode, prosemirrorNodeToHtml } from "remirror";

const extensions = () => [
  new NodeFormattingExtension({}),
  new HeadingExtension({}),
  new BoldExtension({}),
  new ItalicExtension(),
  new UnderlineExtension(),
  new StrikeExtension(),
  new CodeBlockExtension({}),
  new BulletListExtension({}),
  new OrderedListExtension(),
  new LinkExtension({}),
  new ImageExtension({}),
];

interface EditorProps {}

const Editor = forwardRef(({}: EditorProps, editor) => {
  const { manager, state, onChange, getContext } = useRemirror({
    extensions,
    content: "<p><u>Hello</u> there <b>friend</b> and <em>partner</em>.</p>",
    selection: "end",
    stringHandler: "html",
  });
  const toHTML = () => prosemirrorNodeToHtml(state.doc);
  const fromHTML = (rawHTML: string) =>
    manager.view.updateState(
      manager.createState({
        content: htmlToProsemirrorNode({
          content: rawHTML,
          schema: state.schema,
        }),
      })
    );

  useImperativeHandle(editor, () => ({
    getHTML: toHTML,
    setHTML: fromHTML,
  }));
  return (
    <ThemeProvider>
      <Remirror
        manager={manager}
        initialContent={state}
        autoFocus
        autoRender="end"
        classNames={["!bg-transparent"]}
        onChange={onChange}
      >
        <Toolbar className="!bg-transparent">
          <ToolbarButtons />
        </Toolbar>
      </Remirror>
      <button
        onClick={() => {
          console.log();
        }}
      >
        HELLO
      </button>
    </ThemeProvider>
  );
});

Editor.displayName = "Editor";

export default Editor;
