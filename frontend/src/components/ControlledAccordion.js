import { useState } from "react";
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function ControlledAccordion({title}) {
    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div style={{marginTop: '2vh', marginBottom: '1vh'}}>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography variant="h5" sx={{ width: '33%', flexShrink: 0 }}>
                        {title}
                    </Typography>
                    <Typography sx={{ color: 'text.secondary' }}>Put something else here! </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        All exercises done for the day will go here. They should be listed out specifying weight, sets, and reps.
                    </Typography>
                </AccordionDetails>
            </Accordion>


        </div>
    );
}
