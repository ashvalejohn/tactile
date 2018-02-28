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
CartItem.destroy_all
demoUser = User.create({email: "demo@email.com", password: "password"})

# ITEMS ------------------------------------------------------------------------
## Blush Silk Shirt
  blush_silk_shirt = Item.create({
    item_image_url: "http://res.cloudinary.com/ashvalejohn/image/upload/v1519850655/blush-silk-shirt_p0bius.jpg",
    description: "The Silk Short-Sleeve Square Shirt in Blush",
    price: 88.00,
    sizes: ["XS", "S", "M", "L", "XL"],
    tags: "shirt top pink blush collared blouse silk short square short-sleeve"
  })

## High Rise Skinny Jean
  blue_high_rise_skinny_jean = Item.create({
    item_image_url: "http://res.cloudinary.com/ashvalejohn/image/upload/v1519850655/blue-jeans_tgozn2.jpg",
    description: "The High-Rise Skinny Jean in Mid-Blue",
    price: 68.00,
    sizes: ["24", "25", "26", "27", "28", "29", "30", "31", "32"],
    tags: "jeans jean denim blue pant pants bottom bottoms high-rise high"
  })

## Cognac Day Heel
  cognac_day_heel = Item.create({
    item_image_url: "http://res.cloudinary.com/ashvalejohn/image/upload/v1519851082/cognac-day-heel_rjechu.jpg",
    description: "The Day Heel in Cognac",
    price: 145.00,
    sizes: ["6", "6.5", "7", "7.5", "8", "8.5", "9", "9.5", "10"],
    tags: "brown suede cognac heel shoe shoes heels day tan orange"
  })

## Black V Neck Sweater
  black_v_neck_sweater = Item.create({
      item_image_url: "http://res.cloudinary.com/ashvalejohn/image/upload/v1519850645/black-v-neck-sweater_wtwhxk.jpg",
      description: "The Cashmere Crop V-Neck",
      price: 100.00,
      sizes: ["XS", "S", "M", "L", "XL"],
      tags: "top tops knit pullover black v-neck vneck sweater cashmere cropped"
    })
## White High Rise Skinny Jean
  white_high_rise_skinny_jean = Item.create({
      item_image_url: "http://res.cloudinary.com/ashvalejohn/image/upload/v1519850645/white-jeans_hdghdr.jpg",
      description: "The High-Rise Skinny Jean in Bone",
      price: 68.00,
      sizes: ["24", "25", "26", "27", "28", "29", "30", "31", "32"],
      tags: "jeans jean denim white bone pant pants bottom bottoms high-rise high"
    })
## Burgundy Boots
  burgundy_boots = Item.create({
      item_image_url: "http://res.cloudinary.com/ashvalejohn/image/upload/v1519850645/burgundy-boots_orrs7g.jpg",
      description: "The Boss Boot",
      price: 225.00,
      sizes: ["6", "6.5", "7", "7.5", "8", "8.5", "9", "9.5", "10"],
      tags: "shoe shoes boots burgundy leather heels heel"
    })

## Colorblocked Sweater
  colorblocked_sweater = Item.create({
    item_image_url: "http://res.cloudinary.com/ashvalejohn/image/upload/v1519850665/colorblocked-sweater_h0kp4t.jpg",
    description: "The Cashmere Crew in Black/White Colorblock",
    price: 100.00,
    sizes: ["XS", "S", "M", "L", "XL"],
    tags: "top tops knit pullover black v-neck vneck sweater cashmere black white colorblock"
  })
## Khaki Pants
  khaki_pants = Item.create({
    item_image_url: "http://res.cloudinary.com/ashvalejohn/image/upload/v1519850665/khaki-pants_tevdhh.jpg",
    description: "The Wide Leg Crop Pant in Ochre",
    price: 68.00,
    sizes: ["24", "25", "26", "27", "28", "29", "30", "31", "32"],
    tags: "tan brown wide leg pants bottom bottom high-waist high chino"
  })
## Red Crop Mockneck Sweater
  red_crop_mockneck_sweater = Item.create({
    item_image_url: "http://res.cloudinary.com/ashvalejohn/image/upload/v1519850635/red-sweater_pavwo6.jpg",
    description: "The Cashmere Crop Mockneck in Persimmon",
    price: 100.00,
    sizes: ["XS", "S", "M", "L", "XL"],
    tags: "top tops knit pullover red mock mockneck turtleneck sweater cashmere crop cropped"
  })
## White Beanie
  white_beanie = Item.create({
      item_image_url: "http://res.cloudinary.com/ashvalejohn/image/upload/v1519850635/white-beanie_bkxzw1.jpg",
      description: "The Wool-Cashmere Rib Chunky Beanie in White",
      price: 38.00,
      sizes: ["One Size"],
      tags: "hat wool cashmere beanie knit"
    })
## Navy Puffer Jacket
  navy_puffer_jacket = Item.create({
    item_image_url: "http://res.cloudinary.com/ashvalejohn/image/upload/v1519850635/puffer-jacket_yofo7v.jpg",
    description: "The Lightweight Puffer Jacket in Navy",
    price: 88.00,
    sizes:["XS", "S", "M", "L", "XL"],
    tags: "outerwear coat jacket puff blue"
  })

## Black Silk Contrast Top
  black_silk_contrast_top = Item.create({
    item_image_url: "http://res.cloudinary.com/ashvalejohn/image/upload/v1519850620/black-silk-shirt_tjkn8l.jpg",
      description: "The Piped Silk Pocket Shirt in Black",
      price: 98.00,
      sizes:["XS", "S", "M", "L", "XL"],
      tags: "top silk blouse contrast black white pajama"
  })
## Red Day Heel
  red_day_heel = Item.create({
    item_image_url: "http://res.cloudinary.com/ashvalejohn/image/upload/v1519850619/red-velvet-shoes_k3iswk.jpg",
    description: "The Day Heel in Crimson Velvet",
    price: 155.00,
    sizes: ["6", "6.5", "7", "7.5", "8", "8.5", "9", "9.5", "10"],
    tags: "red velvet suede cognac heel shoe shoes heels day"
  })
#
# IMAGES -----------------------------------------------------------------------
## Image 1
  img1 = Image.create({
    image_url: "http://res.cloudinary.com/ashvalejohn/image/upload/v1519850645/01_paqgct.jpg"
  })
## Image 2
  img2 = Image.create({
    image_url: "http://res.cloudinary.com/ashvalejohn/image/upload/v1519850655/02_yb4duf.jpg"
  })
## Image 3
  img3 = Image.create({
    image_url: "http://res.cloudinary.com/ashvalejohn/image/upload/v1519850665/03_ivepw6.jpg"
  })
## Image 4
  img4 = Image.create({
    image_url: "http://res.cloudinary.com/ashvalejohn/image/upload/v1519850635/04_tzh8yb.jpg"
  })
## Image 5
  img5 = Image.create({
    image_url: "http://res.cloudinary.com/ashvalejohn/image/upload/v1519850620/05_fyn3i8.jpg"
  })
#
# IMAGE MAPS -------------------------------------------------------------------
## Image 1 Maps:
  ### Black V Neck Sweater Map
    img1_black_v_neck_sweater = ImageMap.create({
      image_id: img1.id,
      item_id: black_v_neck_sweater.id,
      coords: ["689,483,716,431,760,370,855,297,970,208,1000,216,1024,232,1032,266,1107,377,1158,343,1191,288,1185,264,1247,304,1264,364,1298,590,1312,700,1336,814,1272,813,1237,700,997,706,972,636,940,623,917,660,940,727,919,728,895,642,887,569,886,421,805,482,887,569,895,644"]
    })
  ### White High Rise Skinny Jean Map
    img1_white_high_rise_skinny_jean = ImageMap.create({
      image_id: img1.id,
      item_id: white_high_rise_skinny_jean.id,
      coords: [
        "946,754,972,840,1002,844,1242,1140,1345,1514,1450,1480,1407,1318,1482,1334,1581,1022,1339,789,1328,828,1328,925,1296,959,1439,1062,1388,1215,1380,1084,1302,968,1240,863,1269,816,1234,703,1000,712,1002,733,975,717,973,739"
      ]
    })
  ### Burgundy Boots Map
    img1_burgundy_boots = ImageMap.create({
      image_id: img1.id,
      item_id: burgundy_boots.id,
      coords: [
        "1236,1449,1307,1396,1353,1519,1382,1507,1395,1531,1388,1574,1401,1600,1410,1569,1399,1541,1480,1541,1472,1523,1511,1528,1527,1595,1573,1668,1679,1741,1628,1762,1496,1738,1466,1709,1430,1720,1388,1706,1393,1652,1320,1589,1305,1538,1302,1477,1288,1495,1259,1492"
      ]
    })
# 
## Image 2 Maps:
  ### Cognac Day Heel Map
    img2_cognac_day_heel = ImageMap.create({
      image_id: img2.id,
      item_id: cognac_day_heel.id,
      coords: [
        "811,1285,859,1270,887,1298,910,1310,924,1348,902,1360,782,1340,797,1315,811,1312",
        "671,1294,598,1315,555,1358,557,1391,642,1414",
        "560,1576,482,1654,487,1670,531,1674,665,1639,725,1568,725,1587,763,1608,817,1582,814,1493,773,1422,782,1387,766,1382,765,1426,708,1506,650,1571,568,1592"
      ]
    })
  ### Blue High Rise Skinny Jean
    img2_blue_high_rise_skinny_jean = ImageMap.create({
      image_id: img2.id,
      item_id: blue_high_rise_skinny_jean.id,
      coords: [
        "674,1282,679,1261,758,1278,784,1305,787,1323,836,1196,878,1108,913,984,986,1065,1137,1194,1317,1121,1261,1104,1202,1019,1134,917,956,797,905,773,859,787,830,778,811,800,773,887,735,1002,690,1172,655,1259",
        "1003,1468,1056,1444,1418,1388,1536,1301,1558,1259,1544,1259,1546,1212,1511,1154,1348,1193,1231,1242,1261,1247,1193,1261,1142,1347,1129,1425,1107,1371,1107,1430,1081,1430,1073,1396,1073,1434,1051,1431,1043,1393,1027,1420,1016,1356,1032,1326,970,1333,959,1352,970,1422"
      ]
    })
  ### Blush Silk Shirt
    img2_blush_silk_shirt = ImageMap.create({
      image_id: img2.id,
      item_id: blush_silk_shirt.id,
      coords: [
        "967,611,1021,541,1086,612,1188,550,1208,574,1267,781,1255,894,1274,860,1293,774,1278,736,1278,700,1251,652,1309,572,1336,496,1453,517,1542,598,1592,681,1589,730,1603,945,1600,1153,1589,1231,1563,1258,1554,1256,1552,1207,1533,1175,1514,1154,1544,1132,1565,1034,1566,929,1560,873,1509,910,1436,945,1442,1061,1318,1116,1291,1115,1256,1094,1156,949,1131,913,1102,894,1108,763,1102,708,1026,766,1002,757,987,738,1038,704,1046,674,1026,639,995,614"
      ]
    })
#
## Image 3 Maps:
  ### Colorblocked Sweater Map
    img3_colorblocked_sweater = ImageMap.create({
      image_id: img3.id,
      item_id: colorblocked_sweater.id,
      coords: ["812,999,802,961,807,894,810,758,836,658,837,524,874,435,915,403,981,400,1057,376,1043,390,1047,421,1078,440,1136,446,1192,424,1216,387,1340,432,1389,462,1431,540,1467,678,1494,802,1489,836,1445,912,1372,1031,1334,1060,1329,1026,1295,988,1313,984,1341,944,1394,828,1397,788,1334,631,1273,832,1270,880,1284,936,1281,961,1257,969,1234,979,1142,939,1042,917,996,933,907,923,883,912,881,933,883,944"]
    })
  ### Khaki Pants Map
    img3_khaki_pants = ImageMap.create({
      image_id: img3.id,
      item_id: khaki_pants.id,
      coords: [
        "757,1797,792,1471,816,1177,844,1073,833,1061,876,975,898,975,894,951,886,938,887,917,987,937,1040,917,1140,940,1236,983,1258,987,1299,1091,1321,1181,1312,1353,1344,1798,1108,1795,1108,1630,1092,1360,1078,1236,1075,1201,1062,1204,1056,1226,1029,1361,1005,1471,1014,1608,1013,1797"
      ]
    })
#
## Image 4 Maps:
  ### Red Crop Mockneck Sweater Map
    img4_red_crop_mockneck_sweater = ImageMap.create({
      image_id: img4.id,
      item_id: red_crop_mockneck_sweater.id,
      coords: [
        "943,491,1088,533,1123,518,1091,634,1183,919,1220,1003,1229,1116,1251,1197,1185,1275,1072,1364,1097,1140,1088,1000,995,650,962,563"
      ]
    })
  ### White Beanie Map
    img4_white_beanie = ImageMap.create({
      image_id: img4.id,
      item_id: white_beanie.id,
      coords: [
        "881,393,875,366,895,194,911,157,911,130,913,111,924,56,1022,86,1119,92,1199,145,1239,248,1226,369,1208,409,1208,332,1207,273,1180,235,1105,208,1021,239,956,285,919,320"
      ]
    })
  ### Navy Puffer Jacket Map
    img4_navy_puffer_jacket = ImageMap.create({
      image_id: img4.id,
      item_id: navy_puffer_jacket.id,
      coords: [
        "886,448,854,482,849,550,673,649,633,754,641,1008,661,1148,633,1369,630,1561,674,1604,741,1614,757,1596,778,1579,790,1539,1005,1552,1073,1347,1091,1143,1083,1000,981,604,932,504",
        "1224,588,1274,595,1372,797,1450,1016,1504,1331,1499,1418,1466,1474,1417,1412,1345,1434,1326,1372,1264,1208,1226,1007,1173,875,1185,760" 
      ]
    })
  ### Blue High Rise Skinny Jean Map
    img4_blue_high_rise_skinny_jean = ImageMap.create({
      image_id: img4.id,
      item_id: blue_high_rise_skinny_jean.id,
      coords: [
        "952,1555,1011,1660,1183,1733,1681,1797,1797,1797,1797,1517,1503,1417,1471,1479,1488,1546,1422,1611,1383,1620,1333,1639,1325,1625,1325,1584,1320,1499,1340,1439,1256,1215,1069,1369,1011,1550"
      ]
    })
#
## Image 5 Maps:
  ### Black Silk Contrast Top
  img5_black_silk_contrast_top = ImageMap.create({
      image_id: img5.id,
      item_id: black_silk_contrast_top.id,
      coords: [
        "428,275,491,334,531,305,501,378,572,475,614,424,639,353,634,314,696,332,746,486,760,607,757,702,728,806,709,901,630,920,660,787,654,758,588,719,512,717,499,681,463,636,393,584,347,612,367,655,440,746,366,786,350,824,350,793,336,760,347,677,299,673,299,652,280,654,272,709,224,668,227,569,243,386,275,332"
      ]
  })
  ### Blue High Rise Skinny Jeans
    img5_blue_high_rise_skinny_jean = ImageMap.create({
      image_id: img5.id,
      item_id: blue_high_rise_skinny_jean.id,
      coords: [
        "733,1492,755,1492,774,1482,757,1461,848,1450,822,1331,895,1355,922,1340,935,1310,941,1237,968,1135,967,1008,946,972,727,841,709,919,727,1000,622,946,625,924,619,900,630,852,657,789,652,766,592,722,512,723,490,749,442,749,374,781,350,833,348,932,385,1035,634,1146"
      ]
    })
  ### Red Velvet Day Heel
  img5_red_day_heel = ImageMap.create({
    image_id: img5.id,
    item_id: red_day_heel.id,
    coords: [
      "798,1732,798,1668,811,1612,824,1596,890,1725,945,1749,989,1735,981,1719,995,1722,1045,1794,898,1798,873,1768,862,1743,820,1751",
      "892,1533,948,1593,973,1636,956,1662",
      "758,1490,778,1484,819,1576,779,1592,752,1571"
    ]
  })
#
# CART_ITEMS -------------------------------------------------------------------
## 
  demoCart = CartItem.create({
    user_id: demoUser.id,
    item_id: burgundy_boots.id,
    size: "8",
    quantity: 1
  })