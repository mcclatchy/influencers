# Ad code

A sampling of the ad code for the West region is in the `ad.html` file. All you should need to do is swap the string in the `googletag.defineSlot()` function. The advertising group usually gives whole code chunks, so you may have to debug the differences a little if something isn't working. Specifically look for the `setTargeting()` function, which you can copy paste into the right spot.

The best way to tell if code is working is to open the console and type `googletag.openConsole()`. This will pop up a little thing at the bottom of the page and you can see the bucket, whether the ad "delivered", or if there were problems. An ad can be successful but nothing shows, which I've never really gotten. I'm assuming that there are ways to see why if you go into the DFP dashboard but we don't have access to that.

If anything with the ad code gets confusing, go to the [GPT reference page](https://developers.google.com/doubleclick-gpt/reference). They have a fair amount of examples, though not a lot showing full page source of working examples.

# Backups

I have been trying to keep everything up-to-date. If somebody blows a page up for whatever reason, the full embed for each region is in the appropriate file. The only changes we've gotten are title changes for people who have switched jobs. I have been editing those directly in CUE and then duplicating the changes in these copies. If you need to make one of these changes, remember that the title in both the tiles area and the index down at the bottom. 
