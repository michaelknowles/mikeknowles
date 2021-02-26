---
title: "ztag"
summary: "A command line utility to tag files without requiring a database."
github: https://github.com/michaelknowles/ztag
---

As somebody who uses Linux frequently, I'm pretty partial to the command line. I also value tools that I can use cross-platform, on both Windows and Linux. I was looking for a way to quickly organize my files (i.e. pictures, videos, mangas, etc.) where I could set all of my categorization manually. I wanted to be able to use this tool from the command line so I would have the ability to automate it a bit later too.

I wrote ztag to utilize [symlinks](https://en.wikipedia.org/wiki/Symbolic_link) to create my tags. Basically, I set a bunch of file types that I care about organizing (e.g. picture). Then within the picture type, I can set each picture with multiple tags. As symlinks, they have minimal impact on my space, are easily searchable, editable, etc. because they act just like files.

I also don't have to worry about reorganizing my files at all. I can then create a secondary organization system using the actual file layout. For example, I have a folder of pictures. Inside there, I have folders for my wedding, high school, and specific vacations. Now, I can tag files with other metadata such as who's in the picture or what mood does it reflect.

```bash
pictures/
  wedding/
    1.jpg # tags: me, wife
    2.jpg # tags: wife, mom
  honeymoon/
    1.jpg # tags: me, wife, cancun
    2.jpg # tags: me, wife, cancun
```

For my honeymoon, we went to Cancun so I know every photo in there is going to be in Cancun. Maybe I want to tag them with the location so if I ever go back, I have a way to easily collect all of my Cancun photos.
```bash
for i in pics/honeymoon/*; do ztag -file $i -type pic cancun; done
```

Then in my tags I get:
```bash
cancun/
  honeymoon/1.jpg
  honeymoon/2.jpg
```

This also helps with things like categorizing downloads. If I'm torrenting multiple versions of Linux distributions:
```bash
Ubuntu-10.04
Ubuntu-12.04
Fedora-1
Fedora-9
```

I can create a type called Linux and a tag for each distribution. I could even create a script to do the tagging and set my torrent client to run it once the download completes.