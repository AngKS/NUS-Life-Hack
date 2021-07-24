import {React, useState, useEffect} from 'react'
import {Link} from "react-router-dom"
import CourseList from '../courses/CourseList'
import Navbar from '../navbar/Navbar'

function Courses() {
    return (
        <div>
            <Navbar />
            <section className="container">
                <div className="row d-flex">
                    <div className="col-md-7 float-left">
                        <iframe className="w-100 h-100" src="https://youtu.be/w7ejDZ8SWv8" frameborder="0" allowfullscreen></iframe>
                    </div>
                    <div className="col-md-5 float-right text-center">
                        <CourseList />
                    </div>
                </div>
                <div className="row p-3">
                    <h2>Title</h2>
                    <p>
                        Doggo ipsum floofs blep tungg borkf ur givin me a spook puggo extremely cuuuuuute, tungg wow such tempt you are doing me the shock puggorino. What a nice floof wrinkler puggo smol, clouds you are doin me a concern sub woofer, extremely cuuuuuute long doggo. Vvv sub woofer the neighborhood pupper you are doing me a frighten I am bekom fat floofs, long doggo adorable doggo boof. What a nice floof many pats ruff very jealous pupper vvv floofs, borkf yapper lotsa pats. Very hand that feed shibe woofer smol fat boi, mlem wrinkler. Shooberino very hand that feed shibe what a nice floof such treat, extremely cuuuuuute very good spot lotsa pats shoob, corgo extremely cuuuuuute. Heckin good boys and girls blop smol borking doggo with a long snoot for pats, noodle horse. Adorable doggo aqua doggo very taste wow lotsa pats, extremely cuuuuuute. Adorable doggo the neighborhood pupper shooberino I am bekom fat mlem length boy wow such tempt, stop it fren big ol pupper boofers heck borkdrive. Long water shoob big ol pupper pupperino floofs, pupper.

                        Mlem big ol pupper doggorino waggy wags doge, clouds doge wow very biscit.  wow very biscit much ruin diet. Fluffer shoober pats you are doing me the shock, yapper. You are doin me a concern yapper the neighborhood pupper most angery pupper I have ever seen, bork he made many woofs. Heckin good boys pupper shoober thicc very taste wow borking doggo, big ol puggorino heckin good boys and girls. Very taste wow fluffer heckin good boys puggorino long water shoob, extremely cuuuuuute puggorino ur givin me a spook. Pats shibe puggorino smol doggo heckin good boys snoot, puggo the neighborhood pupper ruff tungg. wow such tempt wrinkler smol borking doggo with a long snoot for pats. Long water shoob very good spot what a nice floof very hand that feed shibe he made many woofs, vvv floofs smol borking doggo with a long snoot for pats.

                    </p>
                </div>
            </section>

        </div>
    )
}

export default Courses
