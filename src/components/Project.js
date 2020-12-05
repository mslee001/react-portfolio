import React from "react";

function Project(props) {
    return(
    <div class="row panel u-center">
        <div class="col-9">
            <div class="card u-fill-width">
                <div class="card-head">
                    <p class="card-head-title">{props.title}</p>
                </div>
                <div class="content">
                    <img src={props.screenshot} alt={props.alt} />
                    <p>{props.description}</p>
                    <div class="action-bar u-center">
                        <button class="btn"><span class="usquare"><a class="utb utb-OLR" target="_blank" href={props.github}>Github
                            Repo</a></span></button>
                        <button class="btn"><span class="usquare"><a class="utb utb-OLR" target="_blank" href={props.link}>Web
                            Page</a></span></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Project;
