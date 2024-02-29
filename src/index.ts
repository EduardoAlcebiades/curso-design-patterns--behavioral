import chainOfResponsability from "./chainOfResponsability";

type Argument<T extends string> = {
  argument?: string;
  value?: T;
};

type Tag = {
  argument: string;
  callback: (argument: string, value?: string) => void;
};

const availableTags: Tag[] = [
  { argument: "chain-of-responsability", callback: chainOfResponsability },
];

function checkArgument<T extends string>(argument: string): Argument<T> {
  const args = process.argv;
  const argumentIndex = args.findIndex((arg) => arg.includes(`--${argument}`));

  if (argumentIndex === -1) {
    return {};
  }

  return {
    argument,
    value: args[argumentIndex + 1] as T | undefined,
  };
}

availableTags.map((tag) => {
  const { argument, value } = checkArgument(tag.argument);

  if (argument) {
    tag.callback(argument, value);
  }
});
