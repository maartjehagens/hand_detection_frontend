import React, {useState} from "react";
import {ProgressBar2} from "../components/ProgressBar2"
import {Container, Row, Col, Card} from "react-bootstrap"
import {Button} from "@mui/material";
import "../Styles/Practice.css";
import {Questions} from "../components/Questions";
import {ProgressBar2Form} from "../components/ProgressBar2Form";

function Practice() {
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
                    <Col className="h-100">
                        <ProgressBar2
                            step={index}
                        />
                    </Col>
                </Row>
                <Row>
                    {
                        submitted ?
                            <Card>
                                <Card.Body>
                                    <p>Your answers have been submitted!</p>
                                </Card.Body>
                                <Card.Footer>
                                    <Button onClick={handleStart}>Start Over</Button>
                                </Card.Footer>
                            </Card> :
                            <Card>
                                <Card.Body>
                                    <ProgressBar2Form
                                        list={Questions}
                                        step={index}
                                        onPageUpdate={onPageAnswerUpdate}
                                        pagesAnswers={pagesAnswers}
                                    />
                                </Card.Body>
                                <Card.Footer className="d-flex justify-content-between">
                                    <Button onClick={prevButton} disabled={index === 1}>Previous</Button>
                                    <Button
                                        onClick={nextButton}>{index === totalPagesCount ? 'Submit' : 'Next'}</Button>
                                </Card.Footer>
                            </Card>
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Practice;