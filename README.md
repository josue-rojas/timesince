# Time Since

A site to inspired by [CW&T Time Since Launch](https://cwandt.com/products/time-since-launch?variant=19682206089275). 

The default timer is set to my partner and I's first date.

## How to Use
Once the app is running, you can set a custom date and title via URL query parameters:

### date: 
Specifies the date from which the timer should start counting. The format should be a valid date string (e.g., January 1, 2020).
### title: 
Customizes the title for the timer. This will be prefixed with "Time Since ".
Example URLs:


With custom date:

```
  http://localhost:3000/?date=January+1,+2020
```
Displays the timer starting from January 1, 2020 with the default title "Time Since I+J First Date".

With custom date and title:
```
http://localhost:3000/?date=January+1,+2020&title=New+Year
```

Displays the timer starting from January 1, 2020 with the title "Time Since New Year".

### Examples for prod site 
https://withcheesepls.com/timesince?title=She+Said+YES!&date=June+8,+2024
