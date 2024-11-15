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
        <Modal.Header className="!bg-bgColor !border-primaryColor !border-2 !border-b-0 !rounded-tl-3xl !rounded-tr-3xl xs-mx:!border-b-0 xs-mx:!border xs-mx:!p-2">
          <Modal.Title
            data-autofocus
            className="flex items-center gap-4 text-4xl text-white !font-bold xs-mx:!text-2xl xs-mx:ml-1 xs-mx:mt-2"
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
                <IconDownload className=" xs-mx:!w-[20px] xs-mx:!h-[20px]" />
              </ActionIcon>
            </Tooltip>
          </Modal.Title>
          <Modal.CloseButton
            size={"md"}
            iconSize={"30px"}
            className="!bg-bgColor !text-gray-100"
          />
        </Modal.Header>
        <Modal.Body className="!bg-bgColor !border-primaryColor !border-2 !border-t-0 !rounded-bl-3xl !rounded-br-3xl !pt-2 xs-mx:!border xs-mx:!border-t-0 xs-mx:!p-2">
          <Document
            className="!w-full !rounded-2xl !overflow-hidden !min-w-40 !min-h-14"
            file={"./resume.pdf"}
          >
            <Page
              className="w-full !min-w-40 !min-h-14 md-mx:[&>.react-pdf\_\_Page\_\_canvas]:!w-full md-mx:[&>.react-pdf\_\_Page\_\_canvas]:!h-auto"
              pageNumber={1}
              renderTextLayer={false}
              renderAnnotationLayer={false}
            ></Page>
            
            <Page
              className="w-full !min-w-40 !min-h-14 md-mx:[&>.react-pdf\_\_Page\_\_canvas]:!w-full md-mx:[&>.react-pdf\_\_Page\_\_canvas]:!h-auto"
              pageNumber={2}
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
