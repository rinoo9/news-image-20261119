[![news-image-20261119](https://make.fun/badge/news-image-20261119.svg)](https://make.fun/bounty/news-image-20261119)
[![rank](https://make.fun/badge/news-image-20261119/rinoo9/news-image-20261119/rank.svg)](https://make.fun/bounty/news-image-20261119)
[![reward](https://make.fun/badge/news-image-20261119/rinoo9/news-image-20261119/reward.svg)](https://make.fun/bounty/news-image-20261119)

# 19 November 2026 — One Day in Pictures

A front-page image summing up the world news of Thursday, 19 November 2026 — every story in it happened, or was first reported, on that day, checked against the day's reporting: Trump, Xi and Putin hold the first-ever trilateral talks in Shenzhen at the APEC summit, ending with a joint pledge that nuclear war "must never be fought" but no breakthrough on Ukraine or Iran; the International Court of Justice delivers its final judgment on Myanmar's Rohingya genocide case; GTA VI arrives after a 13-year wait and scores 99 on Metacritic; Cyclone Akvan bears down on India as 50,000 people are evacuated; and the Crimean Bridge is struck a third time in a week, halting rail traffic hours before the summit. The footer ticker adds the Van Gogh record sale, Zelensky's "new Yalta" warning, COP31's final stretch and turmoil in Bangladesh.

## The image

`entry.png` (1024×1024, PNG) is a newspaper front page drawn for this day: a masthead naming the date, a lead photo of the Shenzhen summit handshake, a two-line standfirst carrying the summit's real outcome, and four panels covering law, culture, weather and war, each with a short headline and a one-line summary so the day reads at a glance. The type is sized so the page stays legible at about 300 pixels across.

## Run

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` (Node 22, standard library only) copies `entry.png` to `$MAKEFUN_OUTPUT_DIR/entry.png` (or `/output/entry.png` in the grader). It checks the file is a whole PNG of at most 1 MiB first, and both runs write byte-identical output. The image is drawn by `draw.py` (outside this repository) with Pillow from a generated summit photo; running it twice produces byte-identical output.

## Entry

Built for the [make.fun bounty "Sum up 19 November's world news in one image"](https://make.fun/bounty/news-image-20261119).
