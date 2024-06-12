#This file contains an explanation of what I did and used Tailwindcss and Reactjs.
First, I created two files, the first I called Pages, which contains the basic pages of the project , and the second I called Components, which contains the reused components within the project pages. After that, I divided the site into 4 main parts: (Header, Sidebar, Outlet, and Footer).  
I started working on the header by creating a component and called it header and placed its contents, which are the site icon, the person’s location, the search field, and other icons.   This component responsive to all screens.
 Second, I created a component, called it Sidebar, and added navigation links for the project pages, this component responds to all screens. 
  After that, I created a page and called it Orders and added its contents, which are some information related to orders.   Then I created a component that I called “Order Box”, which contains the information about the order, such as the products included in the order, the order number, and two buttons one to navigate to the tracking order page and one to navigate to the edit order page.
After that, I created a page and called it TrackingOrders, this page contains information about the order, such as "its number, the name of the person requesting it, the date of its delivery, and a special button to evaluate the order" .   On the same page, I created a "Stepper" in a separate component that shows the stage the order has reached, such as whether it is on its way or completed, delivery and other information. 
And then I created a component that I called "OrderInfo" , which contains more precise information about the order, such as "the date of the order and the place of receipt, and then finally a component that contains the products included in the order." This page is responsive to all screens, then I created a page and called it “Edit Order” which contains information similar to most of the order tracking page information.  So I created a special component for the following (Stepper, OrderInfo, ProductDetails, Product) and I created a special button to cancel the products and check box in the product component , but I created a props in the component where the cancel button and check box are not shown unless  The component props is true and it is true only if these two elements are already on the page this props called {edit} , 
after that I created modal components for that (feedback, cancel product,  return and exchange, order status) the feedback modal it's shown onClick at the feedback button, cancel product shown onClick at the cancel button in the product details component and if you confirm the cancel product modal that well show you the returns and exchange modal and if you confirm that well show you the order status modal. And that's it
Thank you for reading

#Notes:
-The main page is called MainLayout.jsx and it contains the basic components of the site, and in the middle there is an Outlet component to display the site’s pages based on React-router-dom.

-The pages are located in a file called pages, and the components are located in a file called components 

-The main components (header, sidebar, footer) are located in file called MainComponents and the modal components are located in a file called Modal. 

-I used bootstrap icon in some places because I didn't found all of the icons
