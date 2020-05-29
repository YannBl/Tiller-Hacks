// How To Use:
// Follow instructions here: https://community.tillerhq.com/t/track-the-value-of-your-home-via-a-zillow-script/187

function zestimateFetch(zwsid, zpid) {
  
  var url = "https://www.zillow.com/homes/" + zpid + "_zpid/";
  var content = UrlFetchApp.fetch(url).getContentText();

  var pattern = new RegExp('<span class="zsg-tooltip-launch_keyword">Zestimate<sup>®</sup></span></span>:<!-- --> <!-- -->\\$([0-9,]+)</div>');
  var matched = pattern.exec(content)
  var amount = matched[1];
  var lastUpdated = new Date();
  var street = "Your Street Address";
  var zipcode = "YourZipCode";
  var city = "YourTown";
  var state = "YourState";
  
  // return an object with relevant values
  return {
	zpid: zpid,
	amount: amount,
	lastUpdated: lastUpdated,
	street: street,
	zip: zipcode,
	city: city,
	state: state
  };
}
