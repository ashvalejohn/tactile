# Tactile App
__Tactile__ is a shopping app where users can see details about an item by clicking it within an image. Users can browse editorial photographs, click an item they like, then add that item to their cart. 

![Tactile Demo Gif](http://res.cloudinary.com/ashvalejohn/image/upload/c_scale,w_800/v1512164119/readme_ghsm5g.gif)

Tactile is a single-page app built with a Ruby on Rails backend, PostgreSQL database, and React/Redux frontend. Rails is an opinionated backend framework, which makes it ideal for projects built in a short timeframe. React is ideal for single-page apps because it is designed to dynamically render components. PostgreSQL is a relational database, which made it easy to connect images, image maps, and individual clothing items.

Tactile's core features include:
- Responsive clickable items
- Searchable images
- Shopping cart
- User authentication

___
## Clickable Items
Tactile's coolest feature is the ability to click directly on something you like in an image. Like her jacket? *Click it*. Want to know more about those shoes? *Click 'em*. Tactile lets editorial photos ✨come to life✨.

This clickable magic is build using an [HTML image map](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/map), which renders like this:
```html
  <img useMap="#demoMap" src="cute-outfit.jpg">
  <map id="demoMap">
    <area shape="poly" coords="123, 345, 456, 746, 12, 23, ..." alt="12">
  </map>
```

Tactile uses [image-map-resizer](https://www.npmjs.com/package/image-map-resizer) to render clickable maps on desktop and mobile.

### Rendering Item Details
#### `<Image Index>` Component
1. user clicks an `<area>` tag
2. grabs the `item_id` referenced in the `<area>`'s `alt` tag
3. redirects to `/item/{item_id}`

#### `<Item Detail>` Component
4. fetches item information based on URL
5. renders item details!

![Item Detail Screenshot](http://res.cloudinary.com/ashvalejohn/image/upload/c_scale,w_800/v1512167147/Screen_Shot_2017-12-01_at_2.24.54_PM_sgji6t.png)

## Search
Users can search the database of images and Tactile will return all relevant images. 

![Search Screenshot](http://res.cloudinary.com/ashvalejohn/image/upload/c_scale,w_800/v1512168130/Screen_Shot_2017-12-01_at_2.41.23_PM_ruqaxv.png)

## Shopping Cart
Tactile wouldn't be a shopping app without a cart. Users are required to login to see their cart. Logged out users are redirected to `/login` if they try to open their cart. This is achieved using an `<AuthRoute>` on the `/cart` path.

![Cart Screenshot](http://res.cloudinary.com/ashvalejohn/image/upload/c_scale,w_800/v1512167963/Screen_Shot_2017-12-01_at_2.38.58_PM_sev5re.png)
