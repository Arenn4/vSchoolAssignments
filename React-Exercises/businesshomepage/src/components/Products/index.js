import React from 'react'
import './styles.css'
import Brand from './Brand'

const Products = () =>{

  const beers = [
    {
      name: "KOMPAGNON KöLSCH",
      image: "https://static1.squarespace.com/static/57754ba8e58c621a85d7fc3f/t/5787c4ca197aea9fd0b438bf/1468525391569/Kolsch?format=500w",
      abv: '4.2%',
      description: "Kompangnon [pronounced like 'companion' and German for buddy] is our tribute to man's best crime-fighting friend and Nebraska's strong German heritage. Using a recipe consistent with the Purity Law of 1516, this light, easygoing Kölsch is perfect for anyone who enjoys a good brew among good company. "
    },
    {
      name: "WICKED SNOUT FARMHOUSE ALE",
      image: "https://static1.squarespace.com/static/57754ba8e58c621a85d7fc3f/t/5787c4e5197aea9fd0b43a40/1468597474978/wicked+snout?format=500w",
      abv: "6.4%",
      description: "The inspiration for this Farmhouse Ale comes from well, the farm, as a young livestockman, our friend often tussled with the pigs during his daily chores. That good ole'Nebraska farm boy is a lot like the yeast in this hardworking Saison, and those wicked little piggies are a lot like the hops. Be careful, they'll sneak up on you.  "
    },
    {
      name: "ALL HOPPED UP IPA",
      image: "https://static1.squarespace.com/static/57754ba8e58c621a85d7fc3f/t/5787c539197aea9fd0b43dd9/1468597493187/All+Hopped+Up?format=500w",
      abv: "6.5%",
      description: "Some dudes have more energy than they know what to do with. Our friend Brock is one of 'em. From helping our brewery get up and running to raising pythons, the man is always looking for a new challenge to sink his teeth into. All Hopped Up is our tribute. Submit to its refreshing yet striking flavor."
    },
    {
      name: "McKINNEY'S IRISH PUB ALE",
      image: "https://static1.squarespace.com/static/57754ba8e58c621a85d7fc3f/t/5787c8898419c23431a14595/1468597504815/?format=500w",
      abv: "5%",
      description: "We have a couple of Irish buddies that own a couple Irish pubs right here in Nebraska. For them and all the Irish in each of us, we created an easy drinking Irish Red Ale that has the soft caramel malt sweetness and mild toasty finish that Irish Red Ales are known for. If that didn't bring out the Irish in you we added just a wee bit of hop kick to balance it all out and wake you blokes up. "
    },
    {
      name: "TWO GUN TRITICALE BROWN ALE",
      image: "https://static1.squarespace.com/static/57754ba8e58c621a85d7fc3f/t/5787cbe5f7e0aba701f1259c/1468597518855/two+gun?format=500w",
      abv: "5.5 %",
      description: "Starsky and Hutch, Riggs and Murtaugh, Cagney and Lacey (for all the ladies out there). Many dynamic duos have worn the badge. This is another. Triticale, a hybrid of wheat and rye, is the defining ingredient of this delicious brown ale, created with the help of some local professors. Here's to great teamwork and the science behind great taste!"
    },
    {
      name: "HOPE STOUT ",
      image: "https://static1.squarespace.com/static/57754ba8e58c621a85d7fc3f/t/5888e40e725e2527d1dde06c/1485366386446/Hope?format=500w",
      abv: "5.0%",
      description: "A beer originally brewed in memory of a friend who lost his battle to cancer, we are now honoring everyone who is, has, or will be in the fight by providing HOPE, giving a percentage of sales back to Cancer Research!  A beer with a roasted coffee flavor and mild dark chocolate sweetness, this light bodied stout is intended to be enjoyed with friends in memory of those we have lost, in celebration of those we have, and with eagerness for those friends we have yet to meet. "
    },
  ]


  const displayBeers = beers.map((beer, i) => {
    return <Brand key={beer.name + i}
                  name={beer.name}
                  image={beer.image}
                  abv={beer.abv}
                  description={beer.description}
              />
  })



    return(
      <div className='brandContainer'>
       <div className='bodyTitle'>Nectar of the Gods</div>
       {displayBeers}
      </div>
    )
  }
  
  export default Products;