import React, {useState} from "react";
import {ProgressBar2} from "../components/ProgressBar2"
import { Container, Row, Col } from "react-bootstrap"
import {Button, Card} from "@mui/material";
import "../Styles/ProgressBar2.css";
import {Questions} from "../components/Questions";

function Practice () {
    const [index, setIndex] = useState(1);
    const [submitted, setSubmitted] = useState(false);
    const totalPagesCount = Questions?.length || 0;
    // numbered by pages. for exampe { 1: [{"key" : "value"}], 2:["key": "value"], 3: []}
    const [pagesAnswers, setPagesAnswers] = useState({});

    const prevButton = () => {
        if (index > 1) {
            setIndex(prevIndex => prevIndex - 1);
        }
    }

    const nextButton = () => {
        if (index - 3) {
            setIndex(prevIndex => prevIndex + 1);
        } else {
            // clear the form on submit
            setPagesAnswers({});
            setSubmitted(true);
        }
    }

    const onPageAnswerUpdate = (step, answersObj) => {
        setPagesAnswers({...pagesAnswers, [step]: answersObj});
    }

    const handleStart = () => {
        setIndex(1);
        setSubmitted(false);
    }
    return (
        <div className="Practice">
            <Container className="h-100">
                <Row className="m-5">
                    <Col className="align-self-center">
                        <ProgressBar2
                            step={index}
                        />
                    </Col>
                </Row>
                <Row>
                    {
                        submitted ?
                            <Card>
                                <p>Your answers have been submitted!</p>
                                <Button onClick={handleStart}>Start Over</Button>
                            </Card> :
                            <Card>
                                <ProgressBar2
                                    list={Questions}
                                    step={index}
                                    onPageUpdate={onPageAnswerUpdate}
                                    pagesAnswers={pagesAnswers}
                                />
                                <Button onClick={prevButton} disabled={index === 1}>Previous</Button>
                                <Button onClick={nextButton}>{index === totalPagesCount ? 'Submit' : 'Next'}</Button>
                            </Card>
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Practice;