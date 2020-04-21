# @testing-library/react vs Enzyme
Exploration and comparison between @testing-library/react and Enzyme for unit testing.

## What I'm looking for
I'm concerned about how well isolated unit testing is using Enzyme and @testing-library/react.

IMO, unit tests should be run in isolation, i.e. whenever you run unit tests on a specific unit -class, function, or in this case, react component- said unit test should be only concerned with the unit being tested and it's direct, immediate dependencies.

This characteristic can be traced back to the Single Responsibility Principle, as in the end, unit tests are code and they should be held to the same quality bar as production code.

## About the exploration
I know there are other angles I could explore but I wanted to focus specifically on snapshot tests as this approach can indeed be extrapolated to other areas without much effort. Snapshot testing is a feature from some test frameworks, notably, Jest, that allows you to serialize an object -it could be a plain-old-javascript-object or the result of rendering a react component- and compare the result with a previously generated serialization (Jest store this serialization on `.snap` files).

## About the approach
What I want to try is this:
Having a Top level component that renders a Middle level component that renders a Bottom level component:
```
Top --renders--> Middle --renders--> Bottom
```
Base on the Single Responsibility Principle, any unit test for the `Top` component should not be affected by changes of the `Bottom` component, as the latter is not a direct dependency of the former.

### About the approach's execution
I created 3 components: `Top`, `Middle` and `Bottom`
Each of the components render some "fixed" text (as in, the text is defined inside the component itself and not coming from any dependency, i.e. not coming from any `prop`) and a "variable" text, pass through as a prop.

Because of how I structured the components tree, this texts are pass from the top level all the way through the bottom level as props
For the unit, snapshot test, I'm only testing the `Top` component.

The exercise here is to have a look a the snapshot files and see what you get in each case: `Enzyme` and `react-testing-library`

## My conclusions
Looking at the snapshots I can say:

**@testing-library/react** breaks isolation on the unit test: any changes on what the `Bottom` component renders will break the test for the `Top` component. The evidence for this is from the snapshot, which shows:
```html
...
<span>
    Leaf message is:
    bottom level message
</span>
...
```
This is not  true for the Enzyme snapshot

From my point of view, the fact that **@testing-library/react** uses deep rendering (as in, it will resolve the whole tree of react components, getting the actual DOM from the entry point to the leaves), makes it not suitable for unit tests. You want to have a lot of unit tests (for each one of your components probably), to make sure properties are being pass properly to the direct child components. By using deep rendering, we make our unit tests brittle, as a change on a leaf component will affect unit tests from that leaf up to the root of the tree.