<p>Date.parse() returns the number of milliseconds between the date and January 1, 1970:

</p>
const msec = Date.parse("March 15, 2019");
document.write(msec);
const dapar = new Date(msec);

document.write(dapar);
