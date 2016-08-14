*********************************************************************************************************************************************************               Lightbox - a simple image search engine               ****************************
*****************************************************************************************************************************

Pull images from Google's Customer search API and display them on a lightbox (modal).
In this demo - I used a predefined search engine to pull images from http://www.shutterstock.com (via Google's image search) with the query "slack".

To run - clone the repository and open *page.html* in any browser.

Classes in this demo:
- ImagePreview (imagepreview/imagepreview.js) - Creates modals to show image preview (instances of ImagePreviewInstance, see below)
- ImagePreviewInstance (imagepreview/imagepreview.js) - The actual modal instance, through which you can browse through the displayed set of images
- GoogleSearchEngine (engines/google.js) - Searches through Google's Custom Search API using your predefined Custom Search Engine (defined in Google's CSE Dashboard - https://cse.google.com/cse/).
