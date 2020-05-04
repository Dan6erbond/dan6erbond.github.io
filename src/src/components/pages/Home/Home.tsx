import React from 'react';
import './Home.css';
import '../../../css/box.css';
import {Page, PageContainer, PageContent, PageTag, PageTags, PageTitle} from "./Page";

export default function Home() {
    return (
        <React.Fragment>
            <div className="hero">
                <div className="img">
                    <h1>I'm Ravi</h1>
                    <p style={{textAlign: 'center'}}>
                        <wbr/>
                        Programmer with a passion for computer sciences and digital media.
                        <wbr/>
                        Need an open-source search engine, a Reddit or Discord bot?
                        <wbr/>
                        I can help!
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <a href="cv" style={{float: 'right'}}>Give my resumé a look »</a>
                    </p>
                </div>
            </div>

            <PageContainer>
                <Page>
                    <PageTitle class={"mariavi"}>Mariavi</PageTitle>
                    <PageContent>
                        <p>
                            Together with <a href="https://www.lydocia.com" target="_blank"
                                             style={{textDecoration: 'underline'}}>Amy</a> I form <b>Mariavi</b>!
                            A team that works on tons of projects.
                            <br/>
                            <br/>
                            Amongst those projects are Reddify, Banhammer and more!
                        </p>
                        <PageTags>
                            <PageTag children="Read More" link="mariavi"/>
                        </PageTags>
                    </PageContent>
                </Page>
                <Page>
                    <PageTitle class={"fuzzle"}>Fuzzle</PageTitle>
                    <PageContent>
                        <p>
                            I recently developed a search algorithm that powers this site as well as the Melon bot
                            developed by Mariavi.
                            <br/>
                            <br/>
                            It has been adopted to multiple language so far to enable the usage in many
                            projects.
                        </p>
                        <PageTags>
                            <PageTag children="Read More" link="fuzzle"/>
                        </PageTags>
                    </PageContent>
                </Page>
            </PageContainer>
        </React.Fragment>
    );
}