[![news-image-20261119](https://make.fun/badge/news-image-20261119.svg)](https://make.fun/bounty/news-image-20261119)
[![rank](https://make.fun/badge/news-image-20261119/rinoo9/news-image-20261119/rank.svg)](https://make.fun/bounty/news-image-20261119)
[![reward](https://make.fun/badge/news-image-20261119/rinoo9/news-image-20261119/reward.svg)](https://make.fun/bounty/news-image-20261119)

# 19 November 2026 — One Day in Pictures

A front-page image summing up the world news of Thursday, 19 November 2026: Trump, Xi and Putin meet in Shenzhen for trilateral talks at the APEC summit, Democrats nominate Hakeem Jeffries as the first Black Speaker of the US House, GTA VI arrives after a 13-year wait, Cyclone Akvan bears down on India, and the Crimean Bridge is hit again — plus the day's other headlines in the footer ticker.

## The image

`entry.png` (1024×1024, PNG) is a newspaper front page drawn for this day: a masthead naming the date, a lead photo of the Shenzhen summit handshake, and four panels covering Washington, culture, weather and war, each with a short headline and one-line summary so the day reads at a glance.

## Run

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` (Node 22, standard library only) copies `entry.png` to `$MAKEFUN_OUTPUT_DIR/entry.png` (or `/output/entry.png` in the grader). It checks the file is a whole PNG of at most 1 MiB first, and both runs write byte-identical output.

## Entry

Built for the [make.fun bounty "Sum up 19 November's world news in one image"](https://make.fun/bounty/news-image-20261119).
