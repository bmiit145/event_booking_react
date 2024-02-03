import React from 'react';

const Price = (cell:any) => {
    return (
        <React.Fragment>
            {cell.value}
        </React.Fragment>
    );
};

const Pairs = (cell:any) => {
    return (
        <React.Fragment>
            {cell.value}
        </React.Fragment>
    );
};

const HighPrice = (cell:any) => {
    return (
        <React.Fragment>
            {cell.value}
        </React.Fragment>
    );
};

const LowPrice = (cell:any) => {
    return (
        <React.Fragment>
            {cell.value}
        </React.Fragment>
    );
};

const MarketVolume = (cell:any) => {
    return (
        <React.Fragment>
            {cell.value}
        </React.Fragment>
    );
};

export { Price, Pairs, HighPrice, LowPrice, MarketVolume };