import React from 'react'
import Header from 'parts/Header'
import Fade from 'react-reveal/Fade';
import Section from 'elements/Section'

import Clients from 'parts/Clients';

import HeroImage from 'assets/images/hero-image.png'
import Feature1 from 'assets/images/feature-tile-icon-01.svg'
import Feature2 from 'assets/images/feature-tile-icon-02.svg'
import Feature3 from 'assets/images/feature-tile-icon-03.svg'
import Feature from 'parts/Feature';
import Card from 'elements/Card';
import Lists from 'elements/Lists';
import Button from 'elements/Button';
import Footer from 'parts/Footer';

export default function Homepage() {
    const features = [
        {
            imgSrc: Feature1,
            imgAlt: "Feature tile icon 01",
            title: "Join the system",
            desc: "A pseudo-Latin text used in web design, layout, and printing in place of things to emphasise design."
        },
        {
            imgSrc: Feature2,
            imgAlt: "Feature tile icon 02",
            title: "Join the system",
            desc: "A pseudo-Latin text used in web design, layout, and printing in place of things to emphasise design."
        },
        {
            imgSrc: Feature3,
            imgAlt: "Feature tile icon 03",
            title: "Join the system",
            desc: "A pseudo-Latin text used in web design, layout, and printing in place of things to emphasise design."
        },
    ]


    const listPricing = [
        {
            price: 21,
            currencySymbol: "$",
            desc: "Lorem ipsum is a common text",
            features: [
                {
                    isChecked: true,
                    content: "Excepteur sint occaecat velit"
                },
                {
                    isChecked: true,
                    content: "Excepteur sint occaecat velit"
                },
                {
                    isChecked: true,
                    content: "Excepteur sint occaecat velit"
                },
                {
                    isChecked: false,
                    content: "Excepteur sint occaecat velit"
                },
                {
                    isChecked: false,
                    content: "Excepteur sint occaecat velit"
                }
            ]
        },
        {
            price: 25,
            currencySymbol: "$",
            desc: "Lorem ipsum is a common text",
            features: [
                {
                    isChecked: true,
                    content: "Excepteur sint occaecat velit"
                },
                {
                    isChecked: true,
                    content: "Excepteur sint occaecat velit"
                },
                {
                    isChecked: true,
                    content: "Excepteur sint occaecat velit"
                },
                {
                    isChecked: true,
                    content: "Excepteur sint occaecat velit"
                },
                {
                    isChecked: false,
                    content: "Excepteur sint occaecat velit"
                }
            ]
        },
        {
            price: 30,
            currencySymbol: "$",
            desc: "Lorem ipsum is a common text",
            features: [
                {
                    isChecked: true,
                    content: "Excepteur sint occaecat velit"
                },
                {
                    isChecked: true,
                    content: "Excepteur sint occaecat velit"
                },
                {
                    isChecked: true,
                    content: "Excepteur sint occaecat velit"
                },
                {
                    isChecked: true,
                    content: "Excepteur sint occaecat velit"
                },
                {
                    isChecked: true,
                    content: "Excepteur sint occaecat velit"
                }
            ]
        }
    ]

    return (
        <div className="body-wrap">
            <Header />
            <main className="site-content">
                <Section className='hero illustration-section-01' isCenteredContent>
                    <div className="container-sm">
                        <div className="hero-inner section-inner">
                            <div className="hero-content">
                                <Fade bottom delay={500}>
                                    <h1
                                        className="mt-0 mb-16"
                                    >
                                        Landing template for startups
                                    </h1>
                                </Fade>
                                <div className="container-xs">
                                    <Fade bottom delay={1000}>

                                        <p
                                            className="mt-0 mb-32"
                                        >
                                            Our landing page template works on all
                                            devices, so you only have to set it up
                                            once, and get beautiful results forever.
                                        </p>
                                    </Fade>
                                </div>
                            </div>
                            <div
                                className="hero-figure illustration-element-01"
                            >
                                <Fade bottom delay={1500}>

                                    <img
                                        className="has-shadow"
                                        src={HeroImage}
                                        alt="Hero"
                                        width="896"
                                        height="504"
                                    />
                                </Fade>
                            </div>
                        </div>
                    </div>
                </Section>
                <Clients />

                {true && <Section className='features-tiles' >
                    <div className="container">
                        <div className="features-tiles-inner section-inner">
                            <div class="tiles-wrap">
                                {
                                    features.map((fitur, index) =>
                                        <Feature key={index} data={fitur} delayInMS={index * 500} />

                                    )
                                }

                            </div>
                        </div>
                    </div>
                </Section>}


                <Section className='pricing' >
                    <div className="container">
                        <div
                            className="pricing-inner section-inner has-top-divider"
                        >
                            <div className="section-header center-content">
                                <Fade bottom delay={1500} >

                                <div className="container-xs">
                                    <h2 className="mt-0 mb-16">
                                        Simple, transarent pricing
                                    </h2>
                                    <p className="m-0">
                                        Lorem ipsum is common placeholder text
                                        used to demonstrate the graphic elements
                                        of a document or visual presentation.
                                    </p>
                                </div>
                                </Fade>
                            </div>
                            <div className="tiles-wrap">
                                {
                                    listPricing.map((list, index) =>
                                        <Card key={index} delay={index * 1000} hasShadow>
                                            <div class="pricing-item-content">
                                                <div
                                                    class="pricing-item-header pb-24 mb-24"
                                                >
                                                    <div
                                                        class="pricing-item-price mb-4"
                                                    >
                                                        <span
                                                            class="pricing-item-price-currency h2"
                                                        > {list.currencySymbol} </span
                                                        ><span
                                                            class="pricing-item-price-amount h1 pricing-switchable"
                                                            data-pricing-monthly="54"
                                                            data-pricing-yearly="47"
                                                        > {list.price} </span
                                                        >
                                                    </div>
                                                    <div
                                                        class="text-xs text-color-low"
                                                    >
                                                        {list.desc}
                                                    </div>
                                                </div>
                                                <div
                                                    class="pricing-item-features mb-40"
                                                >
                                                    <div
                                                        class="pricing-item-features-title h6 text-xs text-color-high mb-24"
                                                    >
                                                        What’s included
                                                    </div>
                                                    <Lists data={list.features} isSmall className="pricing-item-features-list mb-32">

                                                    </Lists>
                                                </div>
                                                <div class="pricing-item-cta mb-8">
                                                    <Button isPrimary isBlock>Start free trial</Button>
                                                </div>
                                            </div>
                                        </Card>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </Section>

            </main>
            <Footer></Footer>
        </div>
    )
}
