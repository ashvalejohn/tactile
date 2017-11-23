# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

demoUser = User.create({email: "demo@email.com", password: "password"})
photoRoll = Image.create([
  {
    image_url: "http://res.cloudinary.com/ashvalejohn/image/upload/v1511394433/2017-dec1-lwl-img5_uca9mz.jpg", 
    map: {
      "red-dress":["<area alt='red-dress' shape='poly' coords='355, 112, 375, 115, 392, 147, 400, 202, 420, 234, 416, 257, 424, 268, 420, 275, 426, 293, 418, 297, 423, 313, 406, 313, 395, 247, 383, 195, 385, 195, 379, 147, 368, 124' />", "<area alt='red-dress' shape='poly' coords='273, 239, 315, 175, 337, 198, 357, 248, 370, 319, 381, 398, 383, 436, 394, 453, 401, 501, 406, 509, 409, 561, 426, 607, 465, 664, 453, 681, 461, 695, 441, 709, 430, 721, 430, 728, 407, 741, 396, 724, 389, 727, 375, 714, 371, 715, 358, 696, 349, 698, 347, 647, 334, 625, 314, 634, 309, 672, 298, 700, 278, 625, 223, 638, 222, 614, 201, 600, 171, 626, 148, 613, 186, 551, 228, 450, 252, 402, 272, 317, 290, 280, 290, 253' />"], "gray-fair-isle-sweater":["<area alt='gray-fair-isle-sweater' shape='poly' coords='392, 448, 405, 499, 407, 508, 410, 557, 414, 569, 451, 578, 453, 563, 485, 602, 494, 673, 498, 713, 505, 757, 524, 809, 534, 868, 547, 883, 579, 888, 601, 809, 604, 743, 614, 720, 606, 699, 612, 687, 643, 693, 650, 685, 645, 658, 656, 616, 587, 547, 564, 506, 550, 450, 580, 467, 595, 470, 603, 458, 568, 419, 540, 407, 512, 411, 507, 426, 510, 436, 529, 439, 529, 448, 516, 448, 520, 470, 527, 482, 542, 540, 558, 580, 483, 524, 453, 498, 460, 461, 449, 438, 439, 449, 439, 458, 429, 458, 426, 466, 397, 432, 397, 452' />"], "pink-converse-shoe":["<area alt='pink-converse-shoe' shape='poly' coords='41, 826, 80, 821, 135, 782, 144, 798, 162, 802, 182, 795, 183, 815, 193, 845, 193, 868, 167, 876, 58, 874, 28, 856' />", "<area alt='pink-converse-shoe' shape='poly' coords='292, 836, 312, 791, 324, 803, 338, 806, 356, 803, 356, 795, 361, 808, 366, 843, 370, 876, 360, 889, 328, 886, 313, 863' />"], "pink-velvet-hat":["<area alt='pink-velvet-hat' shape='poly' coords='258, 58, 263, 27, 281, 2, 346, 2, 362, 36, 365, 46, 342, 32, 326, 42, 288, 29, 277, 59' />"], "black-fair-isle-socks":["<area alt='black-fair-isle-socks' shape='poly' coords='317, 767, 354, 761, 354, 794, 350, 805, 330, 805, 315, 794' />", "<area alt='black-fair-isle-socks' shape='poly' coords='137, 780, 145, 759, 160, 768, 177, 768, 191, 764, 181, 796, 169, 801, 146, 799' />"]
    } 
  },
])