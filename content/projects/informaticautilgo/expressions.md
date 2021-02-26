---
title: "InformaticaUtilGo - Expressions"
summary: "A Go library to assist developers with Informatica. Has the ability to parse, evaluate, and validate
Informatica expressions."
github: https://github.com/michaelknowles/InformaticaUtilGo
---

## Problem

As with many low-code solutions, it generally works well enough but really causes headaches when developers
start trying to push the system to its limits. One source of annoyance is the custom transformation language:
- it has to evaluate to a single expression/value, so they easily become deeply nested monstrosities
- syntax highlighting is extremely minimal
  - validation is a button to click after everything's input with extremely poor error messages
- they don't use a monospaced font in the editor
- if dates are used at all then no testing/validation is possible until runtime
- matching parentheses, quotes, etc are not auto-inserted or highlighted
- if you don't have edit access on the code then there's no debugging, validating, syntax highlighting, or anything
  - debugging also doesn't work within the Transformation Language at all anyways
- it can be tough to locate a specific expression if you forget where it is since there's no code search
- Informatica is a heavy program that has a hard time scrolling or even loading large interfaces
- and probably more that I'm forgetting

For example, here's a relatively simple bit of code:
```
IIF(LENGTH(LTRIM(RTRIM(v_SOME_INPUT))) == 0 , IIF(v_SOMETHING_ELSE == 1, 'a', 'b'), DECODE(v_OTHER_THING, 1, 'a', 2, 'b', 3, 'c', 'z'))
```

- if the length of trimmed variable v_SOME_INPUT is 0, then
  - if variable v_SOMETHING_ELSE is 1, then 'a', else 'b'
  - else evaluate v_OTHER_THING
    - if it's 1, then 'a'
    - if it's 2, then 'b'
    - if nothing matches, then 'z'

All of this makes it not only tedious to work with when developing, but basically blocks work when debugging environments you have read-only access to.

## Solution

The InformaticaUtilGo library provides the ability to parse, evaluate, and validate expressions.
It lets the user supply variable values and see what the expression will evaluate to.
If the expression is invalid, it will try to give you a better explanation of what's wrong.
As a library, it can be used in many different ways. For example at my work, we're creating a web frontend
so users can test their expressions, save them, and review them again later.

### How it works

1. Utilize the [lexmachine](https://github.com/timtadh/lexmachine) library to tokenize the input with regular expressions
2. Parse the input into a tree. Substitute variables where applicable. For example, `1+2*3` would be parsed like this:
```
  +
 / \
1   *
   / \
  2   3
```
  - the last node to evaluate is at the top of the tree
  - each node has a child for each argument (e.g. a function with 3 arguments would have 3 children)
  - children are presented in order (e.g. 5 - 2 needs to know that 5 is before 2)
3. Recursively evaulate the tree from the bottom up. Using the above example:
  - 2 * 3 = 6
  - 6 + 1 = 7
