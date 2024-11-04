# November 2024
### Arkulator hotfix november update
[Arkulator website](https://arkulator.ojisan.cc/)

###### Hotfix to october update
- Fixed a critical miscalculation when excluding a month with a duration of just 1 month. Previously, if a user sets a range within one month exclusion actually multiplied rewards by 3 instead of excluding. 
- Fixed a major miscalculation with orundums from reruns. Previously, there were no check so when a user sets any amount of stock orundum even without IC or expected reruns 2000 orundums were added. 
- Fixed a major miscalculation where month exclusion didn't exclude yellow certificate store purchases.
- Fixed a problem with controls section where buttons state was saved after date range have been changed resulting in disabled button(s) but deducted rewards. Now all the buttons reset their state on any date change. 

# October 2024
### Arkulator general october update
[Arkulator website](https://arkulator.ojisan.cc/)

###### Updates:
- Section "Advanced" renamed to "Certificate Stores"
- Section "Maybe" renamed to "Speculations"
- Event Sequence functionality added. Replacing previous checkboxes in "Maybe" section
- Input boxes now have an upper limit of 100000000
- My non-standard item names changed to the official (e.g. Yellow Certificate/YC => Distinction Certificate/DC)
###### Fixed:
- September's iOS UI displacement on older iOS versions.
- Event dupes in the calendar (finally omg)
###### New:
- Menu. Now Arkulator is multipage app. Navigation + language selection
- Wiki page. Contains information regarding gacha. General info, advises and OP purchase effectiveness calculation
- Contact page.
- Changelog page (external)
- Language selection (English [ original ], Chinese [AI translated], Japanese [AI translated], Korean [AI translated])
###### Known problems:
- Chinese, Japanese, Korean translations most likely low quality because they were translated by ChatGPT.
###### WIP & Future plans:

# September 2024
### Arkulator initial release
[Arkulator website](https://arkulator.ojisan.cc/)

###### Modules at work:

- Calendar with recurrent login rewards
- Basic calendar controls, such as exclusion of daily and weekly missions, monthly shop purchases and weekly annihilation rewards. 
- 'Guaranteed' calculations
- Advanced calculations
- 'Maybe' calculations
- Budgeting tool
- Descriptive calculation results
- Additional rewards info section
- Help window for each seaction
- Two contact options (Discord and Telegram)

###### Known problems:

- Some dates may be displayed as duplicates. This has no effect on calculations, just visual annoyance
- Some modules may be displaced on iOS especially older versions (iOS 15 and older)


###### Placeholders and WIP:

- TBA in the header is a future menu
- Language selection menu
- Wiki page (Just some knowledge about gacha)
- Contact page (Contact options will be replaced with the language selection and burget menu on mobiles)
- GPSR optimization 