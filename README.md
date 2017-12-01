# Tactile App
## [See it in action](http://ashvalejohn-full-stack.herokuapp.com/#/)
__Tactile__ is a shopping app where users can see details about an item by clicking it within an image. Users can browse editorial photographs, click an item they like, then add that item to their cart. 

![Tactile Demo Gif](http://res.cloudinary.com/ashvalejohn/image/upload/c_scale,w_800/v1512164119/readme_ghsm5g.gif)

Tactile is built with:
- React
- Redux
- Rails
- Postgresql
- React Router
- React Modal

Tactile's core features include:
- Clickable items
- Searchable images
- Shopping cart
- User authentication

___
## Clickable Items
Tactile's coolest feature is the ability to click directly on something you like in an image. Like her jacket? *Click it*. Want to know more about those shoes? *Click 'em*. Tactile lets editorial photos ~* come to life *~.

This clickable magic is build using an [HTML image map](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/map), which renders like this:
```html
  <img useMap="#demoMap" src="cute-outfit.jpg">
  <map id="demoMap">
    <area shape="poly" coords="123, 345, 456, 746, 12, 23, ..." alt="12">
  </map>
```
Every image has a map with several `<area>` tags. Every `<area>` tag references an item in its alt text. When a user clicks an `<area>` tag, they can see the corresponding item's information and add the item to their cart.

![Item Detail Screenshot](http://res.cloudinary.com/ashvalejohn/image/upload/c_scale,w_800/v1512167147/Screen_Shot_2017-12-01_at_2.24.54_PM_sgji6t.png)

## Search
Users can search the database of images and Tactile will return all relevant images. 

![Search Screenshot](http://res.cloudinary.com/ashvalejohn/image/upload/c_scale,w_800/v1512168130/Screen_Shot_2017-12-01_at_2.41.23_PM_ruqaxv.png)

## Shopping Cart
Tactile wouldn't be a shopping app without a cart. Users are required to login to see their cart. Logged out users are redirected to `/login` if they try to open their cart. This is achieved using an `<AuthRoute>` on the `/cart` path.

![Cart Screenshot](http://res.cloudinary.com/ashvalejohn/image/upload/c_scale,w_800/v1512167963/Screen_Shot_2017-12-01_at_2.38.58_PM_sev5re.png)

___

## Looking Forward
- responsive images using [this plugin from Matt Stow](https://github.com/stowball/jQuery-rwdImageMaps)
- expanded cart features: quantity