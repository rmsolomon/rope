import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import React from "react";
// import Accordion from "@mui/material/Accordion";
// import AccordionSummary from "@mui/material/AccordionSummary";
// import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";
import useStyles from "./styles";

const FAQ = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography className={classes.title} variant="h4">
        Frequently Asked Questions
      </Typography>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h6" className={classes.heading}>
            Can you send me a sample of rope?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            The answer is yes. However, we process these requests as a regular
            order. We ask that you place an online order for the rope you are
            interested in and select a quantity of 1 foot or the length you
            desire for sample size. Standard shipping rates apply.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography variant="h6" className={classes.heading}>
            Do you ship to Mexico using online ordering?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Yes.</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h6" className={classes.heading}>
            How do I order multiple lengths of the same rope?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Easy. You simply put the total length of rope you need into the
            "Qty" field and once you are done selecting all of your items, go to
            your cart and checkout. You will be asked to enter your billing and
            shipping information. Once you have finished entering in the data,
            you will then be asked to select the shipping method. The next step
            will ask you if you want to create an account to help you track your
            current and past orders. It is this section where you will be able
            to add notes to the order. Use this text box to enter any cutting
            instructions you need. Keep in mind that on large order where there
            are a lot of cuts that need to be done, one of our estimators will
            call you to go over the order and explain any additional cutting
            charges that may be applied. If you have any questions, please feel
            free to call us at (419) 873-8300. We are working on making this
            process easier and will let you know when that time comes.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h6" className={classes.heading}>
            Why does my manila rope have an odor?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            The production of Manila rope in The Philippines involves the
            addition of cordage oil to the fibers in preparation for being
            twisted into rope. This high viscosity mineral oil is very light.
            However, the lighter the oil, the more the oil smells, yet the
            easier it is for the oil to absorb into the rope fibers.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h6" className={classes.heading}>
            Do you accept returns?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Cut-to-length rope is not returnable. If you’d like to return a new,
            unused spool of rope or hardware item(s) please contact us at (419)
            873-8300. A 25% re-stocking fee will be applied to the refund of any
            returned spools of rope and/or hardware items. The customer is
            responsible for return shipping charges.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default FAQ;
