import React from 'react'
import Checkbox from "./Checkbox";
import AgreementSubmitButton from "./AgreementSubmitButton";
import AgreementText from './AgreementText'

const LicenseAgreement: React.FC = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '20px' }}>
            <div style={{ width: 600 }}>
                <AgreementText />
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Checkbox name="agree" label="I agree" />
                    <AgreementSubmitButton />
                </div>
            </div>
        </div>
    )
}

export default LicenseAgreement