import React, { useState } from "react";
import { Box, Flex, Heading, Text, VStack, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Checkbox, Textarea, Button, IconButton, Divider, ButtonGroup } from "@chakra-ui/react";
import { FaPlus, FaBold, FaItalic, FaUnderline, FaAlignLeft, FaAlignCenter, FaAlignRight } from "react-icons/fa";

const Index = () => {
  const [activeSection, setActiveSection] = useState("análise");
  const [alignment, setAlignment] = useState(null);
  const [listhesis, setListhesis] = useState({});
  const [hernias, setHernias] = useState({});

  const handleAccordionChange = (index) => {
    setActiveSection(index);
  };

  const handleAlignmentChange = (value) => {
    setAlignment(value);
  };

  const handleListhesisChange = (level, type, value) => {
    setListhesis((prevState) => ({
      ...prevState,
      [type]: {
        ...prevState[type],
        [level]: value,
      },
    }));
  };

  const handleHerniasChange = (level, value) => {
    setHernias((prevState) => ({
      ...prevState,
      [level]: value,
    }));
  };

  return (
    <Flex>
      <Box width="20%" bg="gray.800" p={4} color="white">
        <Accordion allowToggle index={activeSection === "análise" ? 0 : activeSection === "conclusão" ? 1 : -1}>
          <AccordionItem>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                técnica
              </Box>
            </AccordionButton>
          </AccordionItem>
          <AccordionItem>
            <AccordionButton bg={activeSection === "análise" ? "gray.700" : ""} onClick={() => handleAccordionChange("análise")}>
              <Box flex="1" textAlign="left">
                análise
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <VStack align="stretch" spacing={2}>
                <Text>Numeração</Text>
                <Text>Pós-operatório</Text>
                <Text>Alinhamento</Text>
                <Text>Corpos vertebrais</Text>
                <Text>Facetas</Text>
                <Text>Discos</Text>
                <Accordion allowToggle>
                  <AccordionItem>
                    <AccordionButton>
                      <Box flex="1" textAlign="left">
                        Hérnias
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel pb={4}>{/* Hérnias checkboxes */}</AccordionPanel>
                  </AccordionItem>
                </Accordion>
                <Text>Canal vertebral</Text>
                <Text>Musculatura</Text>
                <Text>Baastrup</Text>
                <Text>Cistos perirradiculares</Text>
              </VStack>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionButton bg={activeSection === "conclusão" ? "gray.700" : ""} onClick={() => handleAccordionChange("conclusão")}>
              <Box flex="1" textAlign="left">
                conclusão
              </Box>
            </AccordionButton>
          </AccordionItem>
        </Accordion>
        <IconButton icon={<FaPlus />} variant="outline" colorScheme="white" size="sm" mt={4} />
      </Box>
      <Box width="80%" p={8}>
        <Flex>
          <Box width="25%" pr={4}>
            <VStack align="stretch" spacing={6}>
              <Box>
                <Heading as="h4" size="md" mb={2}>
                  ALINHAMENTO POSTERIOR
                </Heading>
                <ButtonGroup isAttached>
                  <Button size="sm" colorScheme={alignment === "preservado" ? "blue" : "gray"} onClick={() => handleAlignmentChange("preservado")}>
                    PRESERVADO
                  </Button>
                  <Button size="sm" colorScheme={alignment === "alterado" ? "blue" : "gray"} onClick={() => handleAlignmentChange("alterado")}>
                    ALTERADO
                  </Button>
                </ButtonGroup>
              </Box>
              <Box>
                <Heading as="h4" size="md" mb={2}>
                  LISE ÍSTMICA
                </Heading>
                {["L1-L2", "L2-L3", "L3-L4", "L4-L5", "L5-S1"].map((level) => (
                  <Checkbox key={level} isChecked={listhesis.lise?.[level]} onChange={(e) => handleListhesisChange(level, "lise", e.target.checked)}>
                    {level}
                  </Checkbox>
                ))}
              </Box>
              <Box>
                <Heading as="h4" size="md" mb={2}>
                  ANTEROLISTESE
                </Heading>
                {["L1-L2", "L2-L3", "L3-L4", "L4-L5", "L5-S1"].map((level) => (
                  <Checkbox key={level} isChecked={listhesis.antero?.[level]} onChange={(e) => handleListhesisChange(level, "antero", e.target.checked)}>
                    {level}
                  </Checkbox>
                ))}
              </Box>
              <Box>
                <Heading as="h4" size="md" mb={2}>
                  RETROLISTESE
                </Heading>
                {["L1-L2", "L2-L3", "L3-L4", "L4-L5", "L5-S1"].map((level) => (
                  <Checkbox key={level} isChecked={listhesis.retro?.[level]} onChange={(e) => handleListhesisChange(level, "retro", e.target.checked)}>
                    {level}
                  </Checkbox>
                ))}
              </Box>
              {activeSection === "análise" && (
                <Box>
                  <Heading as="h4" size="md" mb={2}>
                    Hérnias
                  </Heading>
                  {["D10-D11", "D11-D12", "D12-L1", "L1-L2", "L2-L3", "L3-L4", "L4-L5", "L5-S1"].map((level) => (
                    <Checkbox key={level} isChecked={hernias[level]} onChange={(e) => handleHerniasChange(level, e.target.checked)}>
                      {level}
                    </Checkbox>
                  ))}
                </Box>
              )}
            </VStack>
          </Box>
          <Box width="75%">
            <Flex justify="space-between" mb={4}>
              <Heading as="h2" size="lg">
                TOMOGRAFIA COMPUTADORIZADA DA COLUNA LOMBAR
              </Heading>
              <Button colorScheme="blue" size="sm">
                Copiar
              </Button>
            </Flex>
            <ButtonGroup size="sm" mb={4}>
              <IconButton icon={<FaBold />} />
              <IconButton icon={<FaItalic />} />
              <IconButton icon={<FaUnderline />} />
              <Divider orientation="vertical" />
              <IconButton icon={<FaAlignLeft />} />
              <IconButton icon={<FaAlignCenter />} />
              <IconButton icon={<FaAlignRight />} />
            </ButtonGroup>
            <Box mb={8}>
              <Heading as="h3" size="md" mb={2}>
                Técnica:
              </Heading>
              <Text mb={4}>Exame realizado em equipamento multislice, com aquisição volumétrica e reconstruções nos planos axial, sagital e coronal.</Text>
            </Box>
            <Box mb={8}>
              <Heading as="h3" size="md" mb={2}>
                Análise:
              </Heading>
              <Textarea rows={12} placeholder="Digite a análise aqui..." />
            </Box>
            {activeSection === "conclusão" && (
              <Box>
                <Heading as="h3" size="md" mb={2}>
                  Conclusão:
                </Heading>
                <Textarea rows={6} placeholder="Digite a conclusão aqui..." />
              </Box>
            )}
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Index;
