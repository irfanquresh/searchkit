import { SearchkitComponent, SearchkitComponentProps } from "../../../../core";
export interface NoHitsProps extends SearchkitComponentProps {
}
export declare class NoHits extends SearchkitComponent<NoHitsProps, any> {
    static translations: {
        "NoHits.NoResultsFound": string;
        "NoHits.DidYouMean": string;
    };
    defineBEMBlocks(): {
        container: string;
    };
    renderSuggestions(): JSX.Element;
    updateQueryString(queryString: any): void;
    render(): JSX.Element;
}
