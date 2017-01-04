# FrontEndDev_Assignment11.4
###Assignment 11.4 of the AcadGild Front End Web Dev Course

● Create a select element and bind 5 options there.  
● Then onChange get that value and bind in another element.  

* list: any = [  
{“id”: “1”, “name”: “Parameter”},  
{“id”: “2”, “name”: “lookup”},  
{“id”: “3”, “name”: “Dimension”},  
{“id”: “4”, “name”: “integration”},  
{“id”: “5”, “name”: “currency”}]

My Notes:
* ngOnChanges doesn't fire on child components when changing mutable objects...  
only when the obj ref changes..  
So, I used ngModel to bind dropdown selection to a span
And, used ngDoCheck()
* use `npm run serve` to run 

    