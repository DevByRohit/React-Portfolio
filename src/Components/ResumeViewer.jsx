import { Modal, ScrollArea, ActionIcon, Tooltip } from "@mantine/core";
import { IconDownload } from "@tabler/icons-react";
import { Document, Page } from "react-pdf";
import Info from "./User";

const ResumeViewer = (props) => {
  return (
    <Modal.Root
      size={"auto"}
      opened={props.opened}
      onClose={props.close}
      scrollAreaComponent={ScrollArea.Autosize}
      className="font-mono"
    >
      <Modal.Overlay />
      <Modal.Content className="!rounded-3xl">
        <Modal.Header className="!bg-bgColor !border-primaryColor !border-2 !border-b-0 !rounded-tl-3xl !rounded-tr-3xl">
          <Modal.Title
            data-autofocus
            className="flex items-center gap-4 text-4xl text-white !font-bold"
          >
            Resume
            <Tooltip
              className="text-bgColor"
              label="Download"
              color="#64FFDA"
              position="right"
              offset={5}
            >
              <ActionIcon
                className="text-primaryColor"
                component="a"
                href="/resume.pdf"
                download={Info.name}
                variant="outline"
                color={"#64FFDA"}
              >
                <IconDownload />
              </ActionIcon>
            </Tooltip>
          </Modal.Title>
          <Modal.CloseButton
            size={"md"}
            iconSize={"30px"}
            className="!bg-bgColor !text-gray-100"
          />
        </Modal.Header>
        <Modal.Body className="!bg-bgColor !border-primaryColor !border-2 !border-t-0 !rounded-bl-3xl !rounded-br-3xl !pt-2">
          <Document file={"./resume.pdf"}>
            <Page
              pageNumber={1}
              renderTextLayer={false}
              renderAnnotationLayer={false}
            ></Page>
          </Document>
        </Modal.Body>
      </Modal.Content>
    </Modal.Root>
  );
};
export default ResumeViewer;
