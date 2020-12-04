package com.swe.hw4;

import com.swe.hw4.bean.DataBean;
import org.springframework.stereotype.Component;

import java.util.Arrays;
import java.util.stream.Stream;

/**
 *
 * Class for mean and standard deviation calculation
 * @author Amish Papneja
 *
 */
@Component("statCalc")
public class StatCalculator {

    /**
     * Split string data into list and calculate mean and std deviation
     * @param data
     * @return Data bean object
     */
    public DataBean calculateMeanAndStd(String data) {

        double[] dataArray = Stream.of(data.split(",")).mapToDouble(Double::parseDouble).toArray();
        double mean = Arrays.stream(dataArray).average().getAsDouble();

        double sum = 0;
        for (double d : dataArray) {
            sum += Math.pow((d - mean), 2);
        }
        double std = Math.sqrt(sum / dataArray.length);

        DataBean db = new DataBean();
        db.setMean(mean);
        db.setStandardDeviation(std);
        return db;
    }
}
