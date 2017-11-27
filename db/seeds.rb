# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Item.destroy_all
Image.destroy_all
ImageMap.destroy_all
demoUser = User.create({email: "demo@email.com", password: "password"})

# ITEMS ------------------------------------------------------------------------
## Red Dress
  red_dress = Item.create({
    item_image_url: "http://res.cloudinary.com/ashvalejohn/image/upload/v1511669755/H3634_RD5655_bnovr8.jpg",
    description: "Red silk ruffle midi dress",
    price: 128,
    sizes: ["XS", "S", "M", "L", "XL"]
  })

## Gray Sweater
  gray_sweater = Item.create({
    item_image_url: "http://res.cloudinary.com/ashvalejohn/image/upload/v1511721100/H1410_EG5089_dapmwi.jpg",
    description: "Gray fair-isle pullover sweater",
    price: 164,
    sizes: ["XS", "S", "M", "L", "XL"]
  })

## Pink Converse Sneakers
  pink_converse_sneakers = Item.create({
    item_image_url: "http://res.cloudinary.com/ashvalejohn/image/upload/v1511721202/H1034_EG4939_jmogcl.jpg",
    description: "Pink furry Converse sneakers",
    price: 78,
    sizes: ["6", "6.5", "7", "7.5", "8", "8.5", "9", "9.5", "10"]
  })

## Pink Velvet Hat
  pink_velvet_hat = Item.create({
    item_image_url: "http://res.cloudinary.com/ashvalejohn/image/upload/v1511721623/G9119_EG5407_sl6y4u.jpg",
    description: "Pink velvet hat",
    price: 24,
    sizes: ["One Size"]
  })

## Black Socks
  black_socks = Item.create({
    item_image_url: "http://res.cloudinary.com/ashvalejohn/image/upload/v1511721629/H5038_EG4108_y78q0p.jpg",
    description: "Black fair-isle socks",
    price: 8.50,
    sizes: ["One Size"]
  })

## Green Beanie
  green_beanie = Item.create({
    item_image_url: "http://res.cloudinary.com/ashvalejohn/image/upload/v1511796133/H3306_EG5539_kteyhy.jpg",
    description: "Green knit beanie",
    price: 18.50,
    sizes: ["One Size"]
  })
## Green Velvet Dress
  green_velvet_dress = Item.create({
    item_image_url: "http://res.cloudinary.com/ashvalejohn/image/upload/v1511796127/H2540_GR6182_kmhb7f.jpg",
    description: "Green velvet mini dress",
    price: 69.50,
    sizes: ["XS", "S", "M", "L", "XL"]
  })
## Green Puffy Jacket
  green_puffy_jacket = Item.create({
    item_image_url: "http://res.cloudinary.com/ashvalejohn/image/upload/v1511796122/G9903_GR7248_p3vzs5.jpg",
    description: "Green puffy jacket",
    price: 228.00,
    sizes: ["XS", "S", "M", "L", "XL"]
  })
## Gold Velvet Bracelet
  gold_velvet_bracelet = Item.create({
    item_image_url: "http://res.cloudinary.com/ashvalejohn/image/upload/v1511812098/H4064_PK5516_wk3kha.jpg",
    description: "Gold velvet bracelet",
    price: 6.99,
    sizes: ["One Size"]
  })
## Copper Earrings
  copper_earrings = Item.create({
    item_image_url: "http://res.cloudinary.com/ashvalejohn/image/upload/v1511811607/G6527_EG6129_eqr25f.jpg",
    description: "Beaded Copper Earrings",
    price: 28.00,
    sizes: ["One Size"]
  })
## Pink Femme T-Shirt
  pink_femme_tshirt = Item.create({
    item_image_url: "http://res.cloudinary.com/ashvalejohn/image/upload/v1511811889/H2694_KA2444_ktlh7m.jpg",
    description: "Pink Femme T-Shirt",
    price: 39.50,
    sizes: ["XS", "S", "M", "L", "XL"]
  })
## Burgundy Velvet Pants
  burgundy_velvet_pants = Item.create({
    item_image_url: "http://res.cloudinary.com/ashvalejohn/image/upload/v1511812012/H2647_RD6573_nohgvr.jpg",
    description: "Burgundy Velvet Pants",
    price: 98.00,
    sizes: ["XS", "S", "M", "L", "XL"]
  })
## Cream Fair-Isle Socks
  cream_fair_isle_socks = Item.create({
    item_image_url: "http://res.cloudinary.com/ashvalejohn/image/upload/v1511812212/H5125_EG4105_pobduq.jpg",
    description: "Cream fair-isle socks",
    price: 8.50,
    sizes: ["One Size"]
  })
  ## Pink Sneakers
    pink_sneakers = Item.create({
      item_image_url: "http://res.cloudinary.com/ashvalejohn/image/upload/v1511811615/H0456_EG3439_jnsgr4.jpg",
      description: "Pink satin sneakers",
      price: 64,
      sizes: ["6", "6.5", "7", "7.5", "8", "8.5", "9", "9.5", "10"]
    })


#
# IMAGES -----------------------------------------------------------------------
## Image 5
  img5 = Image.create({
    image_url: "http://res.cloudinary.com/ashvalejohn/image/upload/v1511394433/2017-dec1-lwl-img5_uca9mz.jpg", 
  })
## Image 14
  img14 = Image.create({
    image_url: "http://res.cloudinary.com/ashvalejohn/image/upload/v1511394433/2017-dec1-lwl-img14_sojgem.jpg", 
  })
## Image11 
  img11 = Image.create({
    image_url: "http://res.cloudinary.com/ashvalejohn/image/upload/v1511394433/2017-dec1-lwl-img11_vyd7y0.jpg", 
  })
#
# IMAGE MAPS -------------------------------------------------------------------
## Image 5 Maps:
  ### Red Dress Map
    img5_red_dress = ImageMap.create({
      image_id: img5.id,
      item_id: red_dress.id,
      coords: [
        "355, 112, 375, 115, 392, 147, 400, 202, 420, 234, 416, 257, 424, 268, 420, 275, 426, 293, 418, 297, 423, 313, 406, 313, 395, 247, 383, 195, 385, 195, 379, 147, 368, 124", 
        "273, 239, 315, 175, 337, 198, 357, 248, 370, 319, 381, 398, 383, 436, 394, 453, 401, 501, 406, 509, 409, 561, 426, 607, 465, 664, 453, 681, 461, 695, 441, 709, 430, 721, 430, 728, 407, 741, 396, 724, 389, 727, 375, 714, 371, 715, 358, 696, 349, 698, 347, 647, 334, 625, 314, 634, 309, 672, 298, 700, 278, 625, 223, 638, 222, 614, 201, 600, 171, 626, 148, 613, 186, 551, 228, 450, 252, 402, 272, 317, 290, 280, 290, 253"]
    })

  ### Gray Sweater Map
    img5_gray_sweater = ImageMap.create({
      image_id: img5.id,
      item_id: gray_sweater.id,
      coords: [
        "392, 448, 405, 499, 407, 508, 410, 557, 414, 569, 451, 578, 453, 563, 485, 602, 494, 673, 498, 713, 505, 757, 524, 809, 534, 868, 547, 883, 579, 888, 601, 809, 604, 743, 614, 720, 606, 699, 612, 687, 643, 693, 650, 685, 645, 658, 656, 616, 587, 547, 564, 506, 550, 450, 580, 467, 595, 470, 603, 458, 568, 419, 540, 407, 512, 411, 507, 426, 510, 436, 529, 439, 529, 448, 516, 448, 520, 470, 527, 482, 542, 540, 558, 580, 483, 524, 453, 498, 460, 461, 449, 438, 439, 449, 439, 458, 429, 458, 426, 466, 397, 432, 397, 452"]
    })

  ### Pink Conver Sneakers Map
    img5_pink_converse_sneakers = ImageMap.create({
      image_id: img5.id,
      item_id: pink_converse_sneakers.id,
      coords: [
        "41, 826, 80, 821, 135, 782, 144, 798, 162, 802, 182, 795, 183, 815, 193, 845, 193, 868, 167, 876, 58, 874, 28, 856",
        "292, 836, 312, 791, 324, 803, 338, 806, 356, 803, 356, 795, 361, 808, 366, 843, 370, 876, 360, 889, 328, 886, 313, 863"]
    })

  ### Pink Velvet Hat Map
    img5_pink_velvet_hat = ImageMap.create({
      image_id: img5.id,
      item_id: pink_velvet_hat.id,
      coords: [
        "258, 58, 263, 27, 281, 2, 346, 2, 362, 36, 365, 46, 342, 32, 326, 42, 288, 29, 277, 59"]
    })

  ### Black Socks Map
    img5_black_socks = ImageMap.create({
      image_id: img5.id,
      item_id: black_socks.id,
      coords: [
        "317, 767, 354, 761, 354, 794, 350, 805, 330, 805, 315, 794", 
        "137, 780, 145, 759, 160, 768, 177, 768, 191, 764, 181, 796, 169, 801, 146, 799" ]
    })
#
## Image 14 Maps:
  ### Green Velvet Dress Map
    img14_green_velvet_dress = ImageMap.create({
      image_id: img14.id,
      item_id: green_velvet_dress.id,
      coords: [
        "<280, 380, 277, 356, 300, 270, 390, 233, 468, 253, 481, 239, 475, 291, 539, 325, 564, 424, 548, 435, 544, 421, 533, 423, 532, 464, 553, 532, 564, 605, 562, 647, 573, 713, 567, 865, 454, 852, 399, 860, 357, 875, 355, 875, 356, 836, 338, 741, 339, 659, 344, 611, 353, 553, 343, 506, 322, 452, 338, 393, 290, 364"
      ]
    })
  ### Green Beanie Map
    img14_green_beanie = ImageMap.create({
      image_id: img14.id,
      item_id: green_beanie.id,
      coords: [
        "<405, 154, 415, 126, 454, 76, 474, 50, 503, 62, 513, 79, 535, 84, 549, 135, 542, 173, 519, 208, 516, 202, 527, 178, 525, 161, 498, 139, 464, 131, 428, 142, 406, 161"
      ]
    })
  ### Green Puffy Jacket Map
    img14_green_puffy_jacket = ImageMap.create({
      image_id: img14.id,
      item_id: green_puffy_jacket.id,
      coords: [
        "<538, 481, 555, 470, 591, 499, 593, 545, 604, 542, 633, 586, 652, 599, 657, 618, 676, 653, 660, 788, 601, 820, 603, 834, 597, 837, 586, 819, 569, 832, 571, 801, 622, 801, 640, 789, 639, 766, 585, 753, 579, 767, 589, 795, 569, 795, 578, 716, 567, 623, 565, 583", 
        "<197, 468, 232, 439, 280, 421, 320, 445, 338, 489, 350, 537, 353, 568, 347, 596, 344, 624, 338, 662, 338, 695, 339, 743, 345, 778, 259, 788, 238, 773, 270, 789, 282, 804, 309, 807, 324, 813, 336, 807, 335, 785, 345, 784, 351, 869, 368, 872, 378, 906, 295, 891, 213, 849, 132, 803, 198, 671, 214, 631, 210, 578, 193, 530, 231, 475, 221, 468, 192, 472"
      ]
    })
#
## Image 11 Maps:
  ### Gold Velvet Bracelet Map
    img11_gold_velvet_bracelet = ImageMap.create({
      image_id: img11.id,
      item_id: gold_velvet_bracelet.id,
      coords: [
        "277, 456, 298, 446, 301, 457, 261, 478"
      ]
    })
  ### Copper Earrings Map
    img11_copper_earrings = ImageMap.create({
        image_id: img11.id,
        item_id: copper_earrings.id,
        coords: [
          "362, 126, 378, 126, 381, 152, 365, 157"
        ]
      })
  ### Pink Femme T-Shirt Map
    img11_pink_femme_tshirt = ImageMap.create({
        image_id: img11.id,
        item_id: pink_femme_tshirt.id,
        coords: [
          "283, 253, 281, 235, 295, 195, 315, 175, 364, 173, 372, 199, 394, 207, 418, 204, 427, 188, 478, 207, 486, 224, 495, 270, 469, 274, 455, 286, 453, 301, 455, 333, 447, 354, 466, 370, 463, 386, 463, 397, 438, 402, 410, 390, 358, 389, 307, 421, 302, 409, 315, 316, 312, 249, 288, 231"
        ]
      })
  ### Burgundy Velvet Pants Map
    img11_burgundy_velvet_pants = ImageMap.create({
        image_id: img11.id,
        item_id: burgundy_velvet_pants.id,
        coords: [
          "235, 770, 245, 793, 285, 788, 307, 666, 386, 507, 400, 567, 402, 669, 392, 771, 404, 782, 434, 781, 452, 763, 452, 748, 462, 657, 479, 442, 463, 397, 436, 408, 408, 390, 357, 387, 307, 421, 302, 442, 312, 481, 303, 529, 279, 528, 265, 596, 255, 605, 240, 672"
        ]
      })
  ### Cream Fair-Isle Socks Map
    img11_cream_fair_isle_socks = ImageMap.create({
        image_id: img11.id,
        item_id: cream_fair_isle_socks.id,
        coords: [
          "246, 791, 276, 800, 277, 821, 266, 828, 259, 829, 248, 824, 237, 821, 233, 818, 244, 808",
          "394, 782, 420, 791, 419, 813, 410, 806, 400, 804, 384, 806"
        ]
      })
  ### Pink Sneakers Map
    img11_pink_sneakers = ImageMap.create({
        image_id: img11.id,
        item_id: pink_sneakers.id,
        coords: [
          "379, 829, 397, 874, 430, 888, 446, 875, 443, 845, 424, 815, 408, 804, 393, 804, 384, 811",
          "170, 868, 207, 836, 234, 818, 249, 827, 257, 831, 268, 830, 276, 820, 284, 835, 286, 858, 242, 871, 216, 885, 180, 887"
        ]
      })