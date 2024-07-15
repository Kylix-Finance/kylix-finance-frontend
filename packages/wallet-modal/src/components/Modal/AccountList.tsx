import { InjectedAccount } from '@polkadot/extension-inject/types';
import { useModalStore } from '../../stores';
import { useAccountsStore } from '../../stores/accounts';

const AccountList = ({ }) => {
    const { accounts, setActiveAccount } = useAccountsStore()
    const { setStatus } = useModalStore()
    const accountHandler = (account: InjectedAccount) => {
        setStatus(false);
        setActiveAccount(account.address)
    }
    return <div>
        {
            accounts && accounts?.map((item) => <div key={item.address} onClick={() => accountHandler(item)}>
                <span>{item.name}</span>
                <span>{item.address}</span>
            </div>)
        }
    </div>
}

export default AccountList