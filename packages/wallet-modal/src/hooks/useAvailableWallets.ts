import { InjectedWindowProvider } from "@polkadot/extension-inject/types";
import { useEffect, useState } from "react";

export const useAvailableWallets = () => {
    const [extensions, setExtensions] = useState<Record<string, InjectedWindowProvider> | null>(null);

    useEffect(() => {
        if (window.injectedWeb3) {
            setExtensions(window.injectedWeb3);
        }
    }, []);

    return extensions;
};