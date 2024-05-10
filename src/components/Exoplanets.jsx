import { Canvas } from "@react-three/fiber";
import '../stylesSheets/Exoplanets.css';
import  Model  from '../../public/Earth.jsx';
import {Suspense, useState} from "react";
import {Environment, OrbitControls} from "@react-three/drei";

const Exoplanets = () => {

  const planetInfo = {
    earth: {
      name: "Earth",
      description: "Earth is the third planet from the Sun and is currently the only astronomical object in the known universe to harbor life. This is enabled by Earth being a water world, the only one in the Solar System sustaining liquid surface water."
    },
    jupiter: {
      name: "Jupiter",
      description: "Jupiter is the fifth planet from the Sun, and the largest in the solar system – more than twice" +
        " as massive as the other planets combined. Jupiter is a world of extremes. It's the largest planet in our solar system. If Jupiter was a hollow shell, 1,000 Earths could fit inside.\n" +
        "\n" +
        "Jupiter also is the oldest planet, forming from the dust and gases left over from the Sun's formation 4.5 billion years ago. But it has the shortest day in the solar system, taking only 10.5 hours to spin around once on its axis."
    },
    texture2: {
      name: "TRAPPIST-1H",
      description: "Scientists using NASA's Kepler space telescope identified a regular pattern in the orbits of the planets in the TRAPPIST-1 system that confirmed suspected details about the orbit of its outermost and least understood planet, TRAPPIST-1h.\n" +
        "\n" +
        "TRAPPIST-1 is only eight percent the mass of our sun, making it a cooler and less luminous star. It's home" +
        " to seven Earth-size planets, three of which orbit in their star's habitable zone -- the range of distances" +
        " from a star where liquid water could pool on the surface of a rocky planet. The system is located about 40" +
        " light-years away in the constellation of Aquarius. The star is estimated to be between 3 billion and 8" +
        " billion years old. Astronomers from the University of Washington have used data from the Kepler spacecraft" +
        " to confirm that TRAPPIST-1h orbits its star every 19 days. At six million miles from its cool dwarf star," +
        " TRAPPIST-1h is located beyond the outer edge of the habitable zone, and is likely too cold for life as we" +
        " know it. The amount of energy (per unit area) planet h receives from its star is comparable to what the" +
        " dwarf planet Ceres, located in the asteroid belt between Mars and Jupiter, gets from our sun. "
    },
    moon: {
      name: "Moon",
      description: "The Moon is Earth's only natural satellite. It orbits at an average distance of 384,400 km" +
        " (238,900 mi), about 30 times the diameter of Earth. Over time Earth's gravity has caused tidal locking," +
        " causing the same side of the Moon to always face Earth. The lunar surface is covered in lunar dust and" +
        " marked by mountains, impact craters, their ejecta, ray-like streaks and, mostly on the near side of the" +
        " Moon, by dark maria (\"seas\"), which are plains of cooled magma.   "
    },
    texture4: {
      name: "Kepler-1649c",
      description: "Kepler-1649 c is a super Earth exoplanet that orbits an M-type star. Its mass is 1.2 Earths, it" +
        " takes 19.5 days to complete one orbit of its star, and is 0.0649 AU from its star. Its discovery was" +
        " announced in 2020. Scientists discovered this planet, called Kepler-1649c, when looking through old" +
        " observations from Kepler, which the agency retired in 2018. While previous searches with a computer" +
        " algorithm misidentified it, researchers reviewing Kepler data took a second look at the signature and recognized it as a planet. Out of all the exoplanets found by Kepler, this distant world – located 300 light-years from Earth – is most similar to Earth in size and estimated temperature.   "
    },
    texture5: {
      name: "Neptune",
      description: "Neptune is the eighth and farthest known planet from the Sun. It is the fourth-largest planet in" +
        " the Solar System by diameter, the third-most-massive planet, and the densest giant planet. It is 17 times" +
        " the mass of Earth, and slightly more massive than fellow ice giant Uranus. Neptune's mass of 1.0243×1026" +
        " kg is intermediate between Earth and the larger gas giants: it is 17 times that of Earth but just" +
        " 1/19th that of Jupiter. Its gravity at 1 bar is 11.15 m/s2, 1.14 times the surface gravity of" +
        " Earth, and surpassed only by Jupiter. Neptune's equatorial radius of 24,764 km is nearly four" +
        " times that of Earth. Neptune, like Uranus, is an ice giant, a subclass of giant planet, because they are" +
        " smaller and have higher concentrations of volatiles than Jupiter and Saturn. In the search for" +
        " exoplanets, Neptune has been used as a metonym: discovered bodies of similar mass are often referred to as" +
        " \"Neptunes\",just as scientists refer to various extrasolar bodies as \"Jupiters\".   "
    }
  };

  const [selectedTexture, setSelectedTexture] = useState('earth');
  const [selectedPlanet, setSelectedPlanet] = useState(planetInfo[selectedTexture]);

  const handleSelectChange = (event) => {
    setSelectedTexture(event.target.value);
    setSelectedPlanet(planetInfo[event.target.value]);
  }

  return(
    <>
      <div className="select-exoplanet">
        <select onChange={handleSelectChange}>
          <option value="earth">Earth</option>
          <option value="moon">Moon</option>
          <option value="jupiter">Jupiter</option>
          <option value="texture2">TRAPPIST-1h</option>
          <option value="texture4">Kepler-1649c</option>
          <option value="texture5">Neptune</option>
        </select>
      </div>

      <Canvas>
        <ambientLight/>
        <OrbitControls enableZoom={false}/>
        <Suspense fallback={null}>
          <Model texture={selectedTexture}/>
        </Suspense>
        <Environment preset='sunset' />
      </Canvas>

      <div className="exoplanet-card-information">
        <h2>{selectedPlanet.name}</h2>
        <p>
          {selectedPlanet.description}
        </p>
      </div>

    </>
  );
}

export default Exoplanets;
