
import Button from "antd/es/button";
import Card from "antd/es/card";
import Typography from "antd/es/typography";
import Upload, { RcFile, UploadFile, UploadProps } from "antd/es/upload";
import { useState } from "react";


interface ImportCardProps {
    text: string,
    onUpload: (data:any) => void,
    isUploadingLabel:string,
    startUploadLabel:string
}
export default function ImportCard({ text, onUpload,startUploadLabel,isUploadingLabel }: ImportCardProps) {

    const [fileList, setFileList] = useState<UploadFile[]>([]);
    const [uploading, setUploading] = useState(false);

    const handleUpload = () => {
        let data:RcFile[] = []

        fileList.forEach((file) => {
            data.push(file as  RcFile );
        });

        setUploading(true);
        

    };

    const props: UploadProps = {
        onRemove: (file) => {
            const index = fileList.indexOf(file);
            const newFileList = fileList.slice();
            newFileList.splice(index, 1);
            setFileList(newFileList);
        },
        beforeUpload: (file) => {
            setFileList([file]);

            return false;
        },
        fileList,
    };

    return (
        <Card className="flex flex-col p-2 justify-evenly items-center">
            <Typography.Title level={4} >{text}</Typography.Title>
            <Upload {...props}>
                <Button className="w-full">{text}</Button>
            </Upload>
            <Button
                type="primary"
                onClick={handleUpload}
                disabled={fileList.length === 0}
                loading={uploading}
                style={{ marginTop: 16 }}
            >
                {uploading ? isUploadingLabel : startUploadLabel}
            </Button>

        </Card>
    )

}